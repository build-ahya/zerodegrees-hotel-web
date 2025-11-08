import Image from 'next/image';
import { ErrorMessage, FormikProvider, useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Menu from '@/models/menu';
import { fCurrency, fNumber } from '@/utils/formatNumber';
import { useState } from 'react';
import { handleError } from '@/utils';
import { Input } from './Input';
import Modal from '../modal';
import ActionButton from '../button';
import Room from '@/models/room';
import { QueryParams } from '@/types';
import { fDate } from '@/utils/formatTime';

const COUNTRY_CODE = '+234';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required('Enter Your name is required'),
  emailAddress: yup.string().email('Enter a valid email address'),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Enter a valid phone number')
    .required('Phone number is required')
    .min(10, 'Phone Number must be between 10 - 11 digits')
    .max(11, 'Phone Number must be between 10 - 11 digits'),
});

export default function CheckoutForm({
  room,
  onClose,
  queryParams,
}: {
  room: Room;
  queryParams: QueryParams | undefined;
  onClose: () => void;
}) {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [loading, setLoading] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateType, setDateType] = useState('checkIn');

  const [checkIn, setCheckIn] = useState<Date | null>(
    queryParams?.checkIn ? new Date(fNumber(queryParams?.checkIn)) : today
  );
  const [checkOut, setCheckOut] = useState<Date | null>(
    queryParams?.checkOut ? new Date(fNumber(queryParams?.checkIn)) : tomorrow
  );
  const [adults, setAdults] = useState<number>(
    queryParams?.adults ? fNumber(queryParams?.adults as unknown as string) : 1
  );
  const [children, setChildren] = useState<number>(
    fNumber(queryParams?.children as unknown as string) ?? 0
  );

  const initialValues = {
    name: '',
    emailAddress: '',
    phoneNumber: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        setLoading(true);

        const phoneNumber = `${COUNTRY_CODE}${
          values.phoneNumber.startsWith('0')
            ? values.phoneNumber.substring(1)
            : values.phoneNumber
        }`;

        const payload = {
          ...values,
          phoneNumber,
        };

        setTimeout(() => {
          toast.success(
            'Your application has been successfully submitted. We look forward to reviewing it.'
          );
          setLoading(false);
          formik.resetForm({ values: initialValues });
          onClose();
        }, 3000);
      } catch (error) {
        const msg = handleError(error);
        toast.error(msg);
      } finally {
        // setLoading(false);
      }
    },
  });

  const { values, errors, touched, handleChange, handleBlur } = formik;

  const handleCloseModal = () => setIsCalendarOpen(false);

  const increment = (
    setter: {
      (value: React.SetStateAction<number>): void;
      (value: React.SetStateAction<number>): void;
      (arg0: any): void;
    },
    value: number,
    max: number
  ) => {
    if (value < max) setter(value + 1);
  };

  const decrement = (
    setter: {
      (value: React.SetStateAction<number>): void;
      (value: React.SetStateAction<number>): void;
      (arg0: number): void;
    },
    value: number,
    min: number
  ) => {
    if (value > min) setter(value - 1);
  };

  const handleOpenModal = (type: string) => {
    setDateType(type);
    setIsCalendarOpen(true);
  };

  return (
    <div>
      <div className='flex items-center gap-4'>
        <Image
          src={room.images[0]}
          alt='...'
          className='w-28 h-28 object-cover rounded-xl'
          width={1200}
          height={1200}
        />
        <div className='w-full flex items-center justify-between'>
          <div className='grow'>
            <span className='block mb-1 text-xs font-semibold lowercase text-primary-500'>
              {room.type}
            </span>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white'>
              {room.name}
            </h3>
          </div>

          <p className='text-xl font-medium '>{fCurrency(room.price)}</p>
        </div>
      </div>

      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          className='h-fit bg-white border border-slate-200 rounded-2xl p-4 my-4'
        >
          <h4 className='text-sm font-light text-gray-400 uppercase mb-3'>
            Confirm Availability
          </h4>
          <div className='grid grid-cols-2 gap-4'>
            <div className='md:flex-1 w-full'>
              <label
                htmlFor='check-in'
                className='block text-sm font-light text-gray-600 mb-1'
              >
                Check In
              </label>
              <button
                type='button'
                className='bg-gray-100 w-full px-3 py-2 rounded'
                onClick={() => handleOpenModal('checkIn')}
              >
                {fDate(checkIn as Date)}
              </button>
            </div>
            <div className='md:flex-1 w-full'>
              <label
                htmlFor='check-out'
                className='block text-sm font-light text-gray-600 mb-1'
              >
                Check Out
              </label>
              <button
                type='button'
                className='bg-gray-100 w-full px-3 py-2 rounded '
                onClick={() => handleOpenModal('checkOut')}
              >
                {fDate(checkOut as Date)}
              </button>
            </div>
          </div>
          <div className='md:flex-1 w-full'>
            <Listbox
              value={{ adults, children }}
              onChange={({ adults, children }) => {
                setAdults(adults);
                setChildren(children);
              }}
              name='guest'
            >
              <div className='relative my-2'>
                <ListboxButton className='bg-gray-100 w-full px-3 py-2 rounded text-left'>
                  {adults} Adult{adults > 1 ? 's' : ''}, {children} Child
                  {children > 1 ? 'ren' : ''}
                </ListboxButton>
                <ListboxOptions className=' mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-auto p-2'>
                  <div className='flex items-center justify-between'>
                    <span className='grow text-sm uppercase'>Adults</span>
                    <button
                      type='button'
                      onClick={() => decrement(setAdults, adults, 1)}
                      className='px-2 py-1 text-2xl hover:text-secondary-800 focus:outline-none'
                    >
                      -
                    </button>
                    <span className='px-1 text-xl'>{adults}</span>
                    <button
                      type='button'
                      onClick={() => increment(setAdults, adults, 8)}
                      className='px-2 py-1 text-2xl hover:text-secondary-800 focus:outline-none'
                    >
                      +
                    </button>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='grow text-sm uppercase'>Children</span>
                    <button
                      type='button'
                      onClick={() => decrement(setChildren, children, 0)}
                      className='px-2 py-1 text-2xl hover:text-secondary-800 focus:outline-none'
                    >
                      -
                    </button>
                    <span className='px-1 text-xl'>{children}</span>
                    <button
                      type='button'
                      onClick={() => increment(setChildren, children, 8)}
                      className='px-2 py-1 text-2xl hover:text-secondary-800 focus:outline-none'
                    >
                      +
                    </button>
                  </div>
                </ListboxOptions>
              </div>
            </Listbox>
            <ErrorMessage
              name='guest'
              component='div'
              className='mt-1 text-sm text-red-600'
            />
          </div>
          <Input
            type='text'
            placeholder='Enter your name'
            id='name'
            label='name'
            name='name'
            icon='mdi:user-outline'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            type='text'
            placeholder='Enter your email'
            id='emailAddress'
            label='email'
            name='emailAddress'
            autoComplete='email'
            icon='mdi:email-outline'
            value={values.emailAddress}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className='relative'>
            <Input
              id='phoneNumber'
              label='phoneNumber'
              placeholder='Enter phone Number'
              icon='mdi:phone-outline'
              value={values.phoneNumber}
              error={Boolean(errors.phoneNumber && touched.phoneNumber)}
              message={errors.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className='absolute z-10 top-0 right-0 m-3'>
              <Image
                src='/images/ng-flag.svg'
                className='w-5'
                width={40}
                height={40}
                alt=''
              />
            </div>
          </div>
          <ActionButton variant='primary' disabled={loading} loading={loading}>
            Book Now
          </ActionButton>
        </form>
      </FormikProvider>

      {/* Calendar Modal */}
      <Modal
        title={`Select ${dateType}`}
        isOpen={isCalendarOpen}
        onClose={handleCloseModal}
      >
        {dateType === 'checkIn' ? (
          <DayPicker
            mode='single'
            selected={checkIn as Date}
            onSelect={(value) => setCheckIn(value as Date)}
            disabled={{ before: new Date() }}
            className='w-full m-auto'
          />
        ) : (
          <DayPicker
            mode='single'
            selected={checkOut as Date}
            onSelect={(value) => setCheckOut(value as Date)}
            disabled={{ before: new Date() }}
            className='w-full m-auto'
          />
        )}
      </Modal>
    </div>
  );
}
