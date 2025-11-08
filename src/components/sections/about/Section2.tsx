'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import Container from '@/components/container';
import HtmlWrapper from '@/components/html';
import Icon from '@/components/icon';
import Image from 'next/image';

export default function AboutSection2() {
  const { about } = useAppSelector((state) => state.content);

  return (
    <section className='py-16 bg-white'>
      <Container>
        <div className='grid md:grid-cols-2 gap-12 items-start mb-16'>
          <div className='space-y-8'>
            <div>
              <div className='bg-gradient-to-r from-secondary-200 via-secondary-50 to-transparent h-0.5 my-6 '>
                <div className='bg-secondary-800 w-9 h-0.5'></div>
              </div>
              <h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl leading-tight'>
                {about.section2.title}
                <span className='text-primary-500'>
                  {' '}
                  {about.section2.overline}
                </span>
              </h1>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              {about?.section2?.carousel?.map((item, index) => (
                <div
                  key={index}
                  className='flex items-start space-x-4'
                  data-aos='fade-up'
                  data-aos-delay={`${index * 100}`}
                >
                  <Icon
                    name={item.image}
                    size={24}
                    color='text-secondary-800 mt-1 flex-shrink-0'
                  />
                  <div>
                    <h3 className='text-md font-light uppercase text-gray-900 mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-sm text-gray-700'>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='space-y-6' data-aos='fade-up' data-aos-delay='200'>
            <HtmlWrapper data={about.section2.body} />
          </div>
        </div>

        {/* Added rounded image below the grid */}
        <div className='mt-16' data-aos='fade-up' data-aos-delay='300'>
          <Image
            src={about.section2.image as string}
            alt='About Us'
            width={2000}
            height={1400}
            className='w-full h-[450px] rounded-2xl object-cover'
          />
        </div>
      </Container>
    </section>
  );
}
