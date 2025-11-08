'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Container from '@/components/container';
import { useAppSelector } from '@/hooks/useAppSelector';
import Icon from '@/components/icon';
import { ReservationForm } from '@/components/forms';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
};

export default function HomeSection1() {
  const { home } = useAppSelector((state) => state.content);
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const next = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }, []);

  const beforeChange = useCallback(() => {
    setIsContentVisible(false);
  }, []);

  const afterChange = useCallback((index: number) => {
    setCurrentSlide(index);
    setTimeout(() => setIsContentVisible(true), 50);
  }, []);

  const handleCloseModal = () => setOpenModal(false);

  const handleOpenModal = () => {
    const promo = localStorage.getItem('promo'); // INTERACTED
    setTimeout(() => {
      if (!promo && promo !== 'INTERACTED') {
        setOpenModal(true);
      }
    }, 6000);
  };

  useEffect(() => {
    setIsContentVisible(true);
    handleOpenModal();
  }, []);

  return (
    <>
      <section
        id='home'
        className='relative h-full sm:h-screen bg-black overflow-hidden'
      >
        <Slider
          ref={sliderRef}
          {...settings}
          beforeChange={beforeChange}
          afterChange={afterChange}
        >
          {home.section1.carousel?.map((carousel, idx) => (
            <div key={idx} className='relative h-screen'>
              <Image
                src={carousel.image}
                alt={carousel.title as string}
                className='w-full h-full object-cover'
                width={1920}
                height={1080}
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent' />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent' />
            </div>
          ))}
        </Slider>

        <Container className='absolute inset-0 h-full flex flex-col justify-end gap-4 pb-10'>
          <div className='w-full max-w-2xl'>
            <div
              className={`transition-opacity duration-500 ${
                isContentVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h1
                className='text-6xl sm:text-8xl text-white font-medium font-montserrat_alt leading-tight mb-6'
                data-aos='fade-up'
              >
                {home.section1.carousel?.[currentSlide].title}
              </h1>
              <p
                className='text-white text-sm sm:text-md font-light opacity-70 mb-12'
                data-aos='fade-up'
                data-aos-delay={isContentVisible ? 500 : 0}
              >
                {home.section1.carousel?.[currentSlide].subtitle}
              </p>
            </div>
          </div>

          <ReservationForm />
        </Container>
      </section>
    </>
  );
}
