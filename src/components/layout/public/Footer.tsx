import ActionButton from '@/components/button';
import Container from '@/components/container';
import Icon from '@/components/icon';
import constants from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-gradient-to-b from-primary-700 to-primary-900 text-white '>
      <Container>
        <div className='overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 sm:py-24'>
          <div className='space-y-6'>
            <Link href='/' className='inline-block'>
              <Image
                src='/images/logo-white.svg'
                alt={constants.brandName}
                width={280}
                height={60}
                className='w-full h-16 sm:h-20 object-left object-contain'
              />
            </Link>
            <p className='text-sm text-gray-300 max-w-xs'>
              Discover the beauty of our destinations and create unforgettable
              memories with us.
            </p>
            <div className='flex space-x-4'>
              {constants.footer.socials.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <Icon
                    name={item.icon}
                    size={20}
                    color='text-gray-300 hover:text-white'
                  />
                </Link>
              ))}
            </div>
          </div>

          {constants.footer.sections.map((section) => (
            <div key={section.title} className='space-y-4'>
              <h4 className='text-lg font-semibold'>{section.title}</h4>
              <ul className='space-y-2'>
                {section.pages.map((page) => (
                  <li key={page.name}>
                    <Link
                      href={page.href}
                      className='text-sm text-gray-300 hover:text-white transition-colors'
                      target={page?.external ? '_blank' : '_self'}
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Newsletter</h4>
            <p className='text-sm text-gray-300'>
              Stay updated with our latest offers and news.
            </p>
            <form className='flex items-center'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full grow px-4 py-2 text-sm text-gray-900 bg-white rounded-l-md focus:outline-none'
              />
              <div className='w-fit'>
                <ActionButton
                  variant='outline'
                  className='text-white'
                  icon='mynaui:send'
                  iconColor='text-white'
                >
                  Subscribe
                </ActionButton>
              </div>
            </form>
          </div>
        </div>

        <div className='border-t border-primary-600 py-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <p className='text-sm text-gray-300'>
              © {year} {constants.brandName}. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 sm:mt-0'>
              <Link
                href='/refund-policy'
                className='text-sm text-gray-300 hover:text-white transition-colors'
              >
                Refund Policy
              </Link>
              <Link
                href='/privacy-policy'
                className='text-sm text-gray-300 hover:text-white transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-sm text-gray-300 hover:text-white transition-colors'
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
