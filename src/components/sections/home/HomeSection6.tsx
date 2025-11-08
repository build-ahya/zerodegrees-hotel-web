'use client';
import Slider from 'react-slick';
import Container from '@/components/container';
import { useAppSelector } from '@/hooks/useAppSelector';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import classNames from 'classnames';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 8000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function HomeSection6() {
  const { home } = useAppSelector((state) => state.content);
  const sliderRef = useRef<Slider | null>(null);

  return (
    <section className='py-20 sm:py-32 bg-primary-800'>
      <Container className='slider-container overflow-hidden'>
        <div className='m-6'>
          <h1 className='block font-medium text-white text-2xl md:text-3xl lg:text-4xl text-center'>
            {home.section6.title}
            <span className='text-primary-500'> {home.section6.overline}</span>
          </h1>
        </div>
      </Container>
      <Slider
        ref={sliderRef}
        {...settings}
        // beforeChange={beforeChange}
        // afterChange={afterChange}
        className='space-x-8 overflow-hidden'
      >
        {home.section6.carousel?.map((item) => (
          <div
            key={item.title}
            className='w-full p-4'
          >
            <blockquote className='w-full p-6 bg-white/10 ring-1 ring-slate-300/50 shadow-sm rounded-xl'>
              <span className='text-sm text-neutral-200 italic'>
                {item.body}
              </span>

              <footer className='mt-3'>
                <div className='flex items-center gap-x-2'>
                  <Image
                    className='shrink-0 size-5 rounded-full'
                    src={item.image}
                    alt='...'
                    width={1200}
                    height={1200}
                  />
                  <div className='grow'>
                    <div className='text-xs text-neutral-100'>{item.title}</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        ))}
      </Slider>
    </section>
  );
}
