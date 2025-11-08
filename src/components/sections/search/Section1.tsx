'use client';

// import useSWR from 'swr';
import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/container';
import { ReservationForm } from '@/components/forms';
import useQueryParams from '@/hooks/useQueryParams';
import Room, { RoomType } from '@/models/room';
// import APIService from '@/lib/api';
import { QueryParams } from '@/types';
import { FilterList } from '@/components/list';
import { RoomCard } from '@/components/cards';
import Empty from '@/components/empty';
import Loading from '@/components/loading';
import classNames from 'classnames';
import rooms from '@/demo/rooms';

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

export default function ReservationSection1() {
  const queryParams = useQueryParams() as QueryParams;
  // const { data, isLoading } = useSWR<Room[] | null>(
  //   '/property/all',
  //   APIService.fetcher
  // );
  const isLoading = false;
  const [roomType, setRoomType] = useState('all');

  const filterRoomsByAvailability = useCallback((list: Room[]): Room[] => {
    const { checkIn, checkOut } = queryParams;

    // If no date range is provided, return all active rooms
    if (!checkIn || !checkOut || checkOut <= checkIn) return list;

    return list.filter((room) => {
      // If no availability info is set for this room, assume available
      if (!room.availability || room.availability.length === 0) {
        return true;
      }

      // If any availability period fully covers the requested range, treat as available
      const isAvailable = room.availability.some((available) => {
        const startsBeforeOrAt = available.checkIn <= checkIn;
        const endsAfterOrAt = available.checkOut >= checkOut;
        return startsBeforeOrAt && endsAfterOrAt;
      });

      return isAvailable;
    });
  }, [queryParams]);

  const filteredRooms = useMemo(() => {
    const availableRooms = filterRoomsByAvailability(rooms);

    if (roomType !== 'all') {
      return availableRooms.filter((item) => item.type === roomType);
    }

    return availableRooms;
  }, [filterRoomsByAvailability, roomType]);

  return (
    <>
      <section className='relative bg-hero-pattern h-[60vh] min-h-[600px] flex items-center justify-center'>
        {/* Background Image */}
        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-primary-800/70 via-primary-800/50 to-transparent'></div>

        <Container className='relative z-10'>
          <div className='max-w-3xl mx-auto text-center mb-5'>
            <h1
              className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4'
              data-aos='fade-up'
            >
              Search Results
            </h1>
            <p
              className='text-lg sm:text-1xl text-gray-300 font-light'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              We have found {filteredRooms.length} rooms that meets your needs.
            </p>
          </div>
          <ReservationForm loading={isLoading} />
        </Container>
      </section>
      <section className='flex flex-col my-10 md:my-20'>
        <Container className='space-y-8'>
          <div className='my-2 md:my-5'>
            <FilterList items={rooms} />

            <div className='grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-8 py-4'>
              {[
                { name: 'all', image: '/images/pattern.jpg' },
                ...roomTypes,
              ].map((type) => (
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
          {isLoading ? (
            <Loading />
          ) : !filteredRooms.length ? (
            <Empty message='No available room at the moment. Try a different check-in date' />
          ) : (
            filteredRooms.map((room) => (
              <RoomCard key={room.id} item={room} queryParams={queryParams} />
            ))
          )}
        </Container>
      </section>
    </>
  );
}
