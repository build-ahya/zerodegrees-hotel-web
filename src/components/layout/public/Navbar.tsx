'use client';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames';
import { Transition } from '@headlessui/react';

import Container from '@/components/container';
import constants from '@/constants';
import Icon from '@/components/icon';

const MAX_SCROLL_HEIGHT = 450;

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const isMaxScrollHeight = useMemo(
    () => scrollY > MAX_SCROLL_HEIGHT,
    [scrollY]
  );

  const defaultPages = constants.pages.filter((page) => !page.button);
  const buttonPages = constants.pages.filter((page) => page.button);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <header className='fixed z-50 w-full mt-0 sm:mt-4'>
        <Container className='px-0 sm:px-0'>
          <nav
            className={classnames(
              'relative w-full md:py-2 px-4 sm:px-0 md:flex md:items-center md:justify-between lg:mx-auto rounded-none sm:rounded-2xl transition-all duration-300',
              {
                'bg-white shadow-md': isMaxScrollHeight,
                'bg-transparent': !isMaxScrollHeight,
              }
            )}
          >
            <div className='flex items-center justify-between py-4 sm:py-0'>
              <Link
                href='/'
                className='flex-none rounded-md lg:px-2 text-lg inline-block font-semibold focus:outline-none focus:opacity-80'
                aria-label='Preline'
              >
                <Image
                  src={
                    isMaxScrollHeight
                      ? '/images/logo-default.svg'
                      : '/images/logo-white.svg'
                  }
                  width={280}
                  height={60}
                  className='w-full h-16 object-left object-contain'
                  alt='Logo'
                />
              </Link>

              <div className='md:hidden'>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={classnames(
                    'size-10 flex justify-center items-center text-sm font-semibold rounded-full disabled:opacity-50 disabled:pointer-events-none',
                    {
                      'bg-black/20 text-white': !isMaxScrollHeight,
                      'bg-gray-200 text-gray-800': isMaxScrollHeight,
                    }
                  )}
                >
                  <Icon
                    name={isOpen ? 'mdi:close' : 'mdi:menu'}
                    size={24}
                    color={isMaxScrollHeight ? 'text-gray-800' : 'text-white'}
                  />
                </button>
              </div>
            </div>

            <div className='hidden md:block'>
              <div className='flex items-center md:justify-end'>
                {defaultPages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className={classnames(
                      'p-2 sm:px-3 md:py-4 text-sm font-light uppercase transition-colors duration-300',
                      {
                        'text-primary-800 font-semibold':
                          pathname === page.href && isMaxScrollHeight,
                        'text-white font-semibold':
                          pathname === page.href && !isMaxScrollHeight,
                        'text-gray-700 hover:text-primary-600':
                          isMaxScrollHeight && pathname !== page.href,
                        'text-white/80 hover:text-white':
                          !isMaxScrollHeight && pathname !== page.href,
                      }
                    )}
                    aria-current={pathname === page.href ? 'page' : undefined}
                  >
                    {page.name}
                  </Link>
                ))}
                {buttonPages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className={classnames(
                      'mt-2 md:mt-0 md:ml-4 px-4 py-2 text-sm uppercase font-semibold rounded-sm transition-colors duration-300',
                      {
                        'bg-primary-800 text-white hover:bg-primary-700 mr-2':
                          isMaxScrollHeight,
                        'bg-white text-black hover:bg-secondary-50':
                          !isMaxScrollHeight,
                      }
                    )}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </Container>

        {/* Full-screen modal menu for mobile */}
        <Transition
          show={isOpen}
          enter='transition-opacity duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-primary-800 z-50 flex flex-col justify-center items-center'>
            <div className='absolute top-4 left-4'>
              <Image
                src='/images/logo-white.svg'
                width={280}
                height={60}
                className='w-full h-16 object-left object-contain'
                alt='Logo'
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-4 right-4 text-white py-4'
            >
              <Icon name='mdi:close' size={32} color='text-white' />
            </button>
            <div
              className='flex flex-col items-center space-y-6'
              onClick={closeMenu}
            >
              {defaultPages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className='text-2xl text-white hover:text-secondary-400 transition-colors duration-300'
                >
                  {page.name}
                </Link>
              ))}

              {buttonPages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className='mt-4 px-6 py-3 text-lg uppercase font-semibold rounded-sm bg-white text-primary-800 hover:bg-secondary-50 transition-colors duration-300'
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </Transition>
      </header>
    </>
  );
}
