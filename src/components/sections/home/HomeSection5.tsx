'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Container from '@/components/container';
import Menu from '@/models/menu';
import restaurantMenu from '@/demo/menu';
import classNames from 'classnames';
import { useAppSelector } from '@/hooks/useAppSelector';
import ActionButton from '@/components/button';

export default function HomeSection5() {
  const { home } = useAppSelector((state) => state.content);
  const [selected, setSelected] = useState<Menu>();
  const router = useRouter();

  const menus = restaurantMenu.filter((menu) => menu.highlighted).slice(0, 3);

  useEffect(() => {
    setSelected(menus[0]);
  }, []);

  return (
    <section className='pb-20 sm:pb-32'>
      <Container>
        <div className='relative p-6 md:p-16'>
          <div className='relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center'>
            <div className='mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2'>
              <h1 className='block font-medium text-gray-800 text-2xl md:text-3xl lg:text-4xl text-start'>
                {home.section5.title}
                <span className='text-primary-500'>
                  {' '}
                  {home.section5.overline}
                </span>
              </h1>

              <nav
                className='grid gap-4 mt-5 md:mt-10'
                aria-label='Tabs'
                role='tablist'
                aria-orientation='vertical'
              >
                {menus.map((menu, index) => (
                  <button
                    type='button'
                    key={index}
                    className={classNames(
                      'text-start hover:bg-gray-200 focus:outline-1 focus:border-1 p-4 md:p-5 rounded-xl active',
                      {
                        'border border-dashed border-gray-300':
                          menu.id === selected?.id,
                      }
                    )}
                    role='tab'
                    onClick={() => setSelected(menu)}
                  >
                    <span className='flex gap-x-6'>
                      <span className='grow'>
                        <span className='block text-lg font-semibold text-gray-800 '>
                          {menu.name}
                        </span>
                        <span className='block mt-1 text-gray-800 italic'>
                          {menu.description}
                        </span>
                      </span>
                    </span>
                  </button>
                ))}
              </nav>

              <div className='mt-2 w-fit'>
                <ActionButton
                  variant='default'
                  icon='ic:baseline-arrow-outward'
                  className='bg-transparent hover:text-primary-500 hover:bg-transparent'
                  onClick={() =>
                    router.push(home.section5.button?.href as string)
                  }
                >
                  {home.section5.button?.title}
                </ActionButton>
              </div>
            </div>

            <div className='lg:col-span-6'>
              <div className='relative'>
                <div>
                  <div role='tabpanel'>
                    <img
                      className='w-full h-[400px] sm:h-[500px] object-cover shadow-xl shadow-gray-200 rounded-xl'
                      src={selected?.image}
                      width={1200}
                      height={1200}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute inset-0 grid grid-cols-12 size-full'>
            <div className='col-span-full lg:col-span-7 lg:col-start-6 bg-[#f7f5f1] w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full'></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
