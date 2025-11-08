import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Modal from '../modal';
import ActionButton from '../button';
import { fDate } from '@/utils/formatTime';
import { AnyObject } from '@/types';

interface GuestListProps {
  decrement: (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    min: number
  ) => void;
  increment: (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    max: number
  ) => void;
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  roomChildren: number;
  setRoomChildren: React.Dispatch<React.SetStateAction<number>>;
}

const GuestList = ({
  decrement,
  increment,
  adults,
  setAdults,
  roomChildren,
  setRoomChildren,
}: GuestListProps) => {
  return (
    <div className='w-full bg-white border rounded shadow-lg max-h-60 p-2'>
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
          onClick={() => decrement(setRoomChildren, roomChildren, 0)}
          className='px-2 py-1 text-2xl hover:text-secondary-800 focus:outline-none'
        >
          -
        </button>
        <span className='px-1 text-xl'>{roomChildren}</span>
        <button
          type='button'
          onClick={() => increment(setRoomChildren, roomChildren, 8)}
          className='px-2 py-1 text-2xl hover:text-secondary-800 focus:outline-none'
        >
          +
        </button>
      </div>
    </div>
  );
};

const ReservationForm = ({ loading }: { loading?: boolean }) => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateType, setDateType] = useState('checkIn');

  const [checkIn, setCheckIn] = useState<Date>(today);
  const [checkOut, setCheckOut] = useState<Date>(tomorrow);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const router = useRouter();

  const initialValues = {
    checkIn: today,
    checkOut: tomorrow,
    adults: 1,
    children: 0,
  };

  const handleSubmit = (
    values: typeof initialValues,
    { setSubmitting, resetForm }: any
  ) => {
    // Here you would typically send the form data to your backend
    if (!checkIn && !checkOut) {
      return;
    }
    const query = {
      checkIn: checkIn?.getTime(),
      checkOut: checkOut?.getTime(),
      adults,
      children,
    } as AnyObject;
    router.push(`/search?${new URLSearchParams(query).toString()}`, {
      scroll: true,
    });
  };

  const increment = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    max: number
  ) => {
    if (value < max) setter(value + 1);
  };

  const decrement = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    min: number
  ) => {
    if (value > min) setter(value - 1);
  };

  const getMonthYear = (date: Date) => {
    const formattedDate = fDate(date);
    const parts = formattedDate.split(' ');

    const month = parts[0];

    const year = parts[2];

    return `${month} ${year}`;
  };

  const handleDateChange = (value: Date | undefined, type: string) => {
    if (!value) {
      return;
    }

    if (type === 'checkIn') {
      setCheckIn(value);
    } else {
      setCheckOut(value);
    }

    setIsCalendarOpen(false);
  };

  const handleGuest = () => {
    setAdults(adults);
    setChildren(children);
    setDateType('guest');

    setIsCalendarOpen(true);
  };

  const handleOpenModal = (type: string) => {
    setDateType(type);
    setIsCalendarOpen(true);
  };

  const handleCloseModal = () => setIsCalendarOpen(false);

  return (
    <div>
      {/* Reservation Form */}

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='space-y-4' method='post' action='/search'>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <div className='w-full grid grid-cols-3 gap-2 items-center grow'>
              {/* Check-In Button */}
              <div className='bg-white rounded-lg shadow-lg'>
                <button
                  type='button'
                  onClick={() => handleOpenModal('checkIn')}
                  className='flex flex-col items-center w-full text-left p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 uppercase'
                >
                  <span className='text-xs text-gray-500'>Check In</span>
                  <p className='text-3xl sm:text-6xl font-extralight text-primary-500'>
                    {checkIn?.getDate()}
                  </p>
                  <span className='text-xs text-gray-500'>
                    {getMonthYear(checkIn)}
                  </span>
                </button>
              </div>

              {/* Check-Out Button */}
              <div className='bg-white rounded-lg shadow-lg'>
                <button
                  type='button'
                  onClick={() => handleOpenModal('checkOut')}
                  className='flex flex-col items-center w-full text-left p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 uppercase'
                >
                  <span className='text-xs text-gray-500'>Check Out</span>
                  <p className='text-3xl sm:text-6xl font-extralight text-primary-500'>
                    {checkOut?.getDate()}
                  </p>
                  <span className='text-xs text-gray-500'>
                    {getMonthYear(checkOut)}
                  </span>
                </button>
              </div>

              <div className='bg-white rounded-lg shadow-lg p-3'>
                <p className='text-xs text-gray-500 uppercase text-center'>
                  Guests
                </p>

                <div className='relative'>
                  <button
                    type='button'
                    onClick={handleGuest}
                    className='flex items-center justify-evenly w-full'
                  >
                    <div>
                      <p className='text-3xl sm:text-6xl font-extralight text-primary-500'>
                        {adults}
                      </p>
                      <span className='text-xs text-gray-500'>Adult</span>
                    </div>
                    <div>
                      <p className='text-3xl sm:text-6xl font-extralight text-primary-500'>
                        {children}
                      </p>
                      <span className='text-xs text-gray-500'>Child</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Check Availability Button */}
            <div className='w-full sm:w-auto bg-white rounded-lg shadow-lg'>
              <ActionButton
                type='submit'
                variant='primary'
                disabled={loading}
                loading={loading}
              >
                {loading ? 'Checking...' : 'Check Availability'}
              </ActionButton>
            </div>
          </div>
        </Form>
      </Formik>

      {/* Calendar Modal */}
      <Modal
        title={`Select ${dateType}`}
        isOpen={isCalendarOpen}
        onClose={handleCloseModal}
      >
        {dateType === 'checkIn' ? (
          <DayPicker
            mode='single'
            selected={checkIn}
            onSelect={(value) => handleDateChange(value, 'checkIn')}
            disabled={{ before: new Date() }}
            className='w-full m-auto'
          />
        ) : dateType === 'checkOut' ? (
          <DayPicker
            mode='single'
            selected={checkOut}
            onSelect={(value) => handleDateChange(value, 'checkOut')}
            disabled={{ before: new Date() }}
            className='w-full m-auto'
          />
        ) : (
          <GuestList
            adults={adults}
            setAdults={setAdults}
            roomChildren={children}
            setRoomChildren={setChildren}
            increment={increment}
            decrement={decrement}
          />
        )}
      </Modal>
    </div>
  );
};

export default ReservationForm;
