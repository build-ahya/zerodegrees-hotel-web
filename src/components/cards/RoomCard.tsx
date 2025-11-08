import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { DayPicker } from 'react-day-picker';
import Link from 'next/link';
import ActionButton from '../button';
import Icon from '../icon';
import Room from '@/models/room';
import { QueryParams } from '@/types';

import 'react-day-picker/dist/style.css';
import { fCurrency } from '@/utils/formatNumber';

const MAX_FEATURE = 5;

export default function RoomCard({
  item,
  queryParams,
}: {
  item: Room;
  queryParams: QueryParams;
}) {
  const {
    images,
    name,
    summary,
    amenities,
    price,
    slashedPrice,
    availability,
    slug,
  } = item;

  // Helper function to check if a date is available
  const isDateUnavailable = (date: Date) => {
    return availability.some(
      ({ checkIn, checkOut }) =>
        date >= new Date(checkIn) && date <= new Date(checkOut)
    );
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-4 border rounded-lg'>
      {/* Image Section */}
      <div className='group overflow-hidden md:col-span-3'>
        <Link
          href={{
            pathname: `/search/${slug}`,
            query: {
              checkIn: queryParams.checkIn,
              checkOut: queryParams.checkOut,
              adults: queryParams.adults,
              children: queryParams.children,
            },
          }}
          className='relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105'
        >
          <img
            src={images[0]}
            alt={name}
            className='w-full h-[250px] rounded-lg object-cover transition-transform duration-300 group-hover:scale-110'
          />
        </Link>
      </div>

      {/* Details Section */}
      <div className='md:col-span-6 flex flex-col p-4 md:p-8 border-r'>
        <Link
          href={{
            pathname: `/search/${slug}`,
            query: {
              checkIn: queryParams.checkIn,
              checkOut: queryParams.checkOut,
              adults: queryParams.adults,
              children: queryParams.children,
            },
          }}
          className='hover:text-secondary-600'
        >
          <h2 className='text-2xl sm:text-4xl font-light mb-2 uppercase'>
            {name}
          </h2>
        </Link>
        <p className='text-gray-700 mb-4 line-clamp-2'>{summary}</p>
        <div className='max-w-sm'>
          <ul className='list-image-checkmark columns-2	mx-8 my-2'>
            {amenities.map((amenity) => (
              <li className='py-1' key={amenity.label}>
                <p className='text-sm'>{amenity.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {amenities.length > MAX_FEATURE ? (
            <div className='my-10 text-center text-base'>
              + {amenities.slice(MAX_FEATURE, amenities.length).length} More..
            </div>
          ) : null}
        </div>
      </div>

      {/* Price and Actions Section */}
      <div className='md:col-span-3 flex flex-col items-center justify-between p-8'>
        <div className='text-center'>
          <p className='text-2xl font-bold text-secondary-700 uppercase mb-4'>
            {fCurrency(price)}
            <span className='text-gray-800 text-lg'>/ night</span>
          </p>
          <div className='w-[200px]'>
            <Link
              href={{
                pathname: `/search/${slug}`,
                query: {
                  checkIn: queryParams.checkIn,
                  checkOut: queryParams.checkOut,
                  adults: queryParams.adults,
                  children: queryParams.children,
                },
              }}
            >
              <ActionButton variant='secondary'>Book Now</ActionButton>
            </Link>
          </div>
        </div>
        <Popover className='relative'>
          {({ open }) => (
            <>
              <PopoverButton className='flex items-center py-2 px-4'>
                Availability & Details
                <Icon name='mdi-chevron-down' />
              </PopoverButton>
              {open && (
                <PopoverPanel className='absolute z-10 right-0 mt-2 w-72 p-4 bg-white border rounded shadow-lg'>
                  <h3 className='text-sm font-medium text-gray-700 mb-2'>
                    Select Dates
                  </h3>
                  {/* <DatePicker
                    inline
                    minDate={new Date()}
                    filterDate={(date) => !isDateUnavailable(date)}
                    dayClassName={(date) =>
                      isDateUnavailable(date)
                        ? 'opacity-40 cursor-not-allowed'
                        : ''
                    }
                  /> */}
                  <DayPicker
                    mode='single'
                    selected={new Date()}
                    disabled={{ before: new Date() }}
                    className='w-full m-auto'
                  />
                </PopoverPanel>
              )}
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}
