'use client';
import Image from 'next/image';
import Container from '@/components/container';
import { useAppSelector } from '@/hooks/useAppSelector';
import classNames from 'classnames';

export default function HomeSection4() {
  const { home } = useAppSelector((state) => state.content);

  return (
    <section className='py-20 sm:py-32'>
      <Container>
        <div className='m-6'>
          <h1 className='block font-medium text-gray-800 text-2xl md:text-3xl lg:text-4xl text-center'>
            {home.section4.title}
            <span className='text-primary-500'> {home.section4.overline}</span>
          </h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 mb-4 '>
          {home.section4.carousel?.map((item, index) => (
            <div
              key={item.title}
              className='w-full px-[12px] mb-[24px] order-first'
            >
              <div
                className='shadow-md flex rounded-[15px] overflow-hidden '
                data-aos='fade-up'
                data-aos-duration='1500'
              >
                <div className='flex flex-wrap xl:flex-row flex-col'>
                  <div
                    className={classNames(
                      'xl:w-[50%] xl:p-0 w-[100%] p-[24px] flex items-center justify-center',
                      {
                        'md:order-last': index > 1,
                      }
                    )}
                  >
                    <Image
                      src={item.image}
                      alt='amenities_1'
                      className='w-full h-60 rounded-xl object-cover'
                      width={1200}
                      height={1200}
                    />
                  </div>
                  <div className='xl:w-[50%] xl:p-0 w-[100%] px-[24px] pb-[24px] flex items-center justify-center'>
                    <div className='lh-amenities-in relative xl:p-[24px] px-[0]'>
                      <h4 className='side-number absolute xl:top-[24px] xl:right-[24px] top-[0px] right-[0px] text-[55px] font-extrabold leading-[55px] text-[#0000000d]'>
                        0{index + 1}
                      </h4>

                      <div className='amenities-contain'>
                        <h4 className='amenities-heading xl:text-2xl text-lg font-bold text-gray-800 leading-tight'>
                          {item.title}
                        </h4>
                        <p className='text-xs lg:py-6 md:py-4 py-2'>
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
