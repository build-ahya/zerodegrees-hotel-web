'use client';
import Container from '@/components/container';
import Icon from '@/components/icon';
import { useAppSelector } from '@/hooks/useAppSelector';
import Image from 'next/image';

export default function AboutSection3() {
  const { about } = useAppSelector((state) => state.content);

  return (
    <section id='core-values'>
      <div className='bg-primary-800 bg-blend-soft-light bg-[url("/images/Single-Room-overlay.png")] bg-cover bg-center p-10 lg:p-40'>
        <Container maxWidth='max-w-screen-lg'>
          <div className='flex flex-col items-center' data-aos='fade-up'>
            <h1 className='block font-medium text-white text-2xl md:text-3xl lg:text-4xl text-center'>
              {about.section3.title}
            </h1>
            <div className='bg-gradient-to-r from-secondary-200 via-secondary-50 to-transparent h-0.5 my-6 '>
              <div className='bg-secondary-600 w-9 h-0.5'></div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mb-20'>
            {about.section3.carousel?.map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center space-y-4'
                data-aos='fade-up'
                data-aos-delay={index * 150}
              >
                <Icon name={item.image} size={82} color='text-primary-300' />
                <h3 className='text-lg font-semibold text-white text-center'>
                  {item.title}
                </h3>
                <p className='mt-1 text-neutral-400 text-center'>{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
