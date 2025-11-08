import Image from 'next/image';
import { FormikProvider, useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import Menu from '@/models/menu';
import { fCurrency } from '@/utils/formatNumber';
import { useState } from 'react';
import { handleError } from '@/utils';
import { Input, Select } from './Input';
import ActionButton from '../button';
import Icon from '../icon';

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

export default function OrderForm({
  menu,
  onClose,
}: {
  menu: Menu;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
    emailAddress: '',
    phoneNumber: '',
    variant: '',
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

  return (
    <div>
      <div>
        <div className='flex items-center gap-4'>
          <Image
            src={menu.image}
            alt='...'
            className='w-28 h-28 object-cover rounded-xl'
            width={1200}
            height={1200}
          />
          <div className='w-full flex items-center justify-between'>
            <div className='grow'>
              <span className='block mb-1 text-xs font-semibold lowercase text-primary-500'>
                {menu.category}
              </span>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white'>
                {menu.name}
              </h3>
            </div>

            <p className='text-xl font-medium '>{fCurrency(menu.price)}</p>
          </div>
        </div>

        {menu?.sides?.length ? (
          <div>
            <div className='hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700'>
              <div
                className='hs-accordion pb-3 active'
                id='hs-basic-with-title-and-arrow-stretched-heading-one'
              >
                <button
                  className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-sm text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400'
                  aria-expanded='true'
                  aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-one'
                >
                  Sides
                  <Icon name='ic:baseline-keyboard-arrow-down' />
                </button>
                <div
                  id='hs-basic-with-title-and-arrow-stretched-collapse-one'
                  className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
                  role='region'
                  aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-one'
                >
                  {menu.sides.map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between'
                    >
                      <p className='text-xs'>{item.name}</p>
                      <p className='text-xs font-medium'>
                        {fCurrency(item.price)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          className='h-fit bg-white border border-slate-200 rounded-2xl p-4 my-4'
        >
          {menu?.variants ? (
            <Select
              label='variant'
              name='variant'
              id='variant'
              defaultValue={values.variant}
              onChange={handleChange}
            >
              <option value=''>Select Variant</option>
              {menu.variants.map((item) => (
                <option key={item.name} value={item.name}>
                  {`${item.name} - ${fCurrency(item.price)}`}
                </option>
              ))}
            </Select>
          ) : null}
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
            Place Order
          </ActionButton>
        </form>
      </FormikProvider>
    </div>
  );
}
