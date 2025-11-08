'use client';

import Container from '@/components/container';
import rooms from '@/demo/rooms';
import { useAppSelector } from '@/hooks/useAppSelector';
import Room, { RoomType } from '@/models/room';
import { fCurrency } from '@/utils/formatNumber';
import classNames from 'classnames';
import Image from 'next/image';
import { useMemo, useState } from 'react';

const roomTypes = Object.values(RoomType).map((name) => {
  switch (name) {
    case 'Deluxe Room':
      return {
        name,
        image: '/images/Deluxe-Room.png',
      };
    case 'Single Room':
      return {
        name,
        image: '/images/Single-Room.png',
      };

    case 'Super Room':
      return {
        name,
        image: '/images/Super-Room.png',
      };
    case 'Presidential Room':
      return {
        name,
        image: '/images/Presidential-Room.png',
      };

    default:
      return {
        name,
        image: '',
      };
  }
});

export default function HomeSection2() {
  const { home } = useAppSelector((state) => state.content);
  const [roomType, setRoomType] = useState('Deluxe Room');

  const room = useMemo(() => {
    return rooms.filter((item) => item.type === roomType)[0];
  }, [roomType]);

  return (
    <section className='py-20 sm:py-32'>
      <Container>
        <div className='flex flex-col items-center space-y-4 sm:space-y-8'>
          <h1 className='block font-medium text-gray-800 text-2xl md:text-3xl lg:text-4xl text-center'>
            {home.section2.title}
            <span className='text-primary-500'> {home.section2.overline}</span>
          </h1>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8'>
            {roomTypes.map((type) => (
              <button
                className='relative w-full'
                key={type.name}
                onClick={() => setRoomType(type.name)}
              >
                <Image
                  src={type.image}
                  className={classNames(
                    'w-full h-16 rounded-2xl filter grayscale hover:scale-105 transition-all ease-linear',
                    {
                      'grayscale-0': type.name === roomType,
                    }
                  )}
                  alt='...'
                  width={500}
                  height={500}
                />
                <p className='mt-4 text-xs text-center text-gray-600'>
                  {type.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className='grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center my-12'>
          <div className='lg:col-span-3'>
            <div className='flex items-center justify-between'>
              <h1 className='block text-3xl font-medium text-gray-800 dark:text-white'>
                {room.name}
              </h1>
              <div className='flex items-center gap-2'>
                <p className='text-3xl text-primary-500'>
                  {fCurrency(room.price)} /
                </p>
                <p className='text-xs text-gray-800'>Per Night</p>
              </div>
            </div>

            <div className='flex items-center gap-2 text-xs py-4'>
              <p>{room.size} SQ.ft</p> <span>|</span>
              <p>{room.bedroom} Bedroom</p> <span>|</span>
              <p>Up To {room.guest || 8} Guest</p>
            </div>

            <p className='mt-3 text-sm text-gray-800'>{room.description}</p>

            <div className='my-4'>
              <h1 className='block text-2xl font-medium text-gray-800 dark:text-white'>
                Amenities
              </h1>
              <ul className='list-image-checkmark columns-2	mx-8 my-2'>
                {room.amenities.map((amenity) => (
                  <li className='py-1' key={amenity.label}>
                    <p className='text-sm'>{amenity.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='lg:col-span-4 mt-10 lg:mt-0'>
            <Image
              className='w-full rounded-xl'
              src={room.images[0]}
              width={1200}
              height={1200}
              alt='...'
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
