'use client';
import { useEffect, useState, useRef, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import Container from '@/components/container';
import Icon from '@/components/icon';
import ActionButton from '@/components/button';
import { CheckoutForm } from '@/components/forms';
import Modal from '@/components/modal';
import Empty from '@/components/empty';
import Room from '@/models/room';
import { QueryParams } from '@/types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useAppSelector } from '@/hooks/useAppSelector';
import { fCurrency } from '@/utils/formatNumber';

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
};

const gallerySettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function RoomDetails({ room }: { room: Room }) {
  const { contact } = useAppSelector((state) => state.content);
  const sliderRef = useRef<Slider | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const adults = searchParams.get('adults');
  const children = searchParams.get('children');

  const next = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const address = contact.section2?.carousel?.find(
    (item) => item.subtitle === 'Our Address'
  );

  const openLightbox = (index: number) => {
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (pathname.includes('/reservation')) {
      setIsModalOpen(true);
    }
  }, [pathname]);

  if (!room) {
    return <Empty message='property not found' />;
  }

  return (
    <>
      <section className='relative h-[60vh]'>
        <div className='relative overflow-hidden'>
          <Slider ref={sliderRef} {...settings}>
            {room.images.map((image, idx) => (
              <div key={idx} className='relative h-screen'>
                <Image
                  src={image}
                  alt='#image'
                  className='w-full h-[480px] object-cover'
                  width={1920}
                  height={1080}
                  objectFit='cover'
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className='absolute inset-0 bg-gradient-to-b from-primary-800/70 via-primary-800/50 to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/70'></div>

        <Container className='absolute inset-0 flex items-end'>
          <div className='mb-8 space-y-2 text-white'>
            {/* Breadcrumb navigation */}
            <nav className='flex my-4' aria-label='Breadcrumb'>
              <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                <li className='inline-flex items-center'>
                  <Link
                    href='/'
                    className='inline-flex items-center text-xs font-light text-gray-200 hover:text-white'
                  >
                    <Icon name='mdi:home' size={16} color='mr-2' />
                    Home
                  </Link>
                </li>
                <li>
                  <div className='flex items-center'>
                    <Icon
                      name='mdi:chevron-right'
                      size={16}
                      color='text-gray-400'
                    />
                    <Link
                      href='/properties'
                      className='ml-1 text-xs font-light text-gray-200 hover:text-white md:ml-2'
                    >
                      properties
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>{room.name}</h1>
            <div className='max-w-2xl'>
              <p className='text-sm opacity-70'>{room.summary}</p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className='py-16'>
          <div className='grid md:grid-cols-3 gap-12'>
            <div className='md:col-span-2'>
              <div className='flex flex-col'>
                <p
                  className='text-md font-bold uppercase text-secondary-800'
                  data-aos='fade-up'
                >
                  About {room.name}
                </p>
                <div className='bg-gradient-to-r from-secondary-200 via-secondary-50 to-transparent h-0.5 my-6 '>
                  <div className='bg-secondary-800 w-9 h-0.5'></div>
                </div>
              </div>
              <article className='prose lg:prose-md max-w-screen-2xl'>
                <div dangerouslySetInnerHTML={{ __html: room.description }} />
              </article>
              <div className='mt-10'>
                <ul className='space-y-4'>
                  <li className='flex items-center capitalize'>
                    <Icon
                      name='mdi:map-marker'
                      size={24}
                      color='text-secondary-800 mr-2'
                    />
                    <span>{room.location.address}</span>
                  </li>
                  <li className='flex items-center'>
                    <Icon
                      name='material-symbols-light:bed-outline'
                      size={24}
                      color='text-secondary-800 mr-2'
                    />
                    <span>Bedrooms: {room.bedroom}</span>
                  </li>
                  <li className='flex items-center'>
                    <Icon
                      name='solar:bath-outline'
                      size={24}
                      color='text-secondary-800 mr-2'
                    />
                    <span>Bathrooms: {room.bathroom}</span>
                  </li>
                </ul>
              </div>
            </div>

            <aside className='sticky top-4'>
              <div className='bg-gray-100 p-6 rounded-lg mb-4'>
                <h2 className='text-md font-bold uppercase text-secondary-800 mb-4'>
                  Checkout
                </h2>
                <div className='bg-gradient-to-r from-secondary-200 via-secondary-50 to-transparent h-0.5 my-6 '>
                  <div className='bg-secondary-800 w-9 h-0.5'></div>
                </div>

                <p className='text-3xl font-bold text-secondary-700 uppercase mb-4'>
                  {fCurrency(room.price)}
                  <span className='text-gray-800 text-xl'>/ night</span>
                </p>
                <ActionButton
                  variant='secondary'
                  onClick={() => setIsModalOpen(true)}
                >
                  Book Now
                </ActionButton>
              </div>

              <div className='p-6 rounded-lg mb-4'>
                <h2 className='text-md font-bold uppercase text-secondary-800 mb-4'>
                  Rules
                </h2>
                <div className='bg-gradient-to-r from-secondary-200 via-secondary-50 to-transparent h-0.5 my-6 '>
                  <div className='bg-secondary-800 w-9 h-0.5'></div>
                </div>
                <ul className='space-y-2 sm:space-y-4'>
                  {room.rules.map((item) => (
                    <li key={item} className='flex gap-x-3'>
                      <span className='mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500'>
                        <svg
                          className='shrink-0 size-3.5'
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <polyline points='20 6 9 17 4 12' />
                        </svg>
                      </span>
                      <div className='grow'>
                        <span className='text-sm sm:text-base text-gray-500 dark:text-neutral-500'>
                          {item}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className='mt-12'>
        <Container>
          <div className='flex flex-col'>
            <p
              className='text-md font-bold uppercase text-secondary-800'
              data-aos='fade-up'
            >
              The Amenities
            </p>
            <div className='bg-gradient-to-r from-secondary-200 via-secondary-50 to-transparent h-0.5 my-6 '>
              <div className='bg-secondary-800 w-9 h-0.5'></div>
            </div>
          </div>

          <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
            {room.amenities.map((feature, index) => (
              <li
                key={index}
                className='flex flex-col items-center lg:py-8'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <Icon
                  name={feature.icon}
                  size={48}
                  color='text-secondary-800'
                />
                <h4 className='text-lg font-light text-center'>
                  {feature.label}
                </h4>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className='my-12'>
        <Container>
          <div className='flex flex-col mb-8'>
            <p
              className='text-md font-bold uppercase text-secondary-800'
              data-aos='fade-up'
            >
              Gallery
            </p>
            <div className='bg-gradient-to-r from-secondary-200 via-secondary-50 to-transparent h-0.5 my-6'>
              <div className='bg-secondary-800 w-9 h-0.5'></div>
            </div>
          </div>
        </Container>

        <div className='relative'>
          <Slider ref={sliderRef} {...gallerySettings}>
            {room.images.map((image, index) => (
              <div
                key={index}
                className='px-2'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <div className='relative h-64 md:h-80'>
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg'
                    onClick={() => openLightbox(index)}
                  />
                </div>
              </div>
            ))}
          </Slider>
          <button
            onClick={next}
            className='absolute -bottom-16 right-0 lg:right-16 z-10 bg-secondary-600 text-white p-4 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-opacity-50'
            aria-label='Next slide'
          >
            <Icon name='mdi-light:arrow-right' size={32} color='text-white' />
          </button>
        </div>
      </section>

      <section className='py-12 bg-[#f7f5f1]'>
        <Container>
          <div className='my-6 rounded-2xl border border-gray-200 bg-white p-7 group transition-all duration-500'>
            <h5 className='text-gray-900 text-xl font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-gray-800'>
              Direction
            </h5>

            <iframe
              src={address?.href}
              width='100%'
              height='350'
              loading='lazy'
            ></iframe>
          </div>
        </Container>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={`Book ${room.name} Now`}
      >
        <CheckoutForm
          queryParams={
            checkIn
              ? ({
                  checkIn,
                  checkOut,
                  adults,
                  children,
                } as unknown as QueryParams)
              : undefined
          }
          room={room}
          onClose={closeModal}
        />
      </Modal>
    </>
  );
}
