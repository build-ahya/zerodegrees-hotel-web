'use client';
import ActionButton from '@/components/button';
import Container from '@/components/container';
import { useAppSelector } from '@/hooks/useAppSelector';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomeSection3() {
  const { home } = useAppSelector((state) => state.content);
  const router = useRouter();

  return (
    <section className='bg-[#f7f5f1] py-20 sm:py-32'>
      <Container>
        <div className='grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center'>
          <div className='relative'>
            <Image
              className='w-full h-[600px] object-cover rounded-2xl'
              src={home.section3.image as string}
              alt='...'
              width={1200}
              height={1200}
            />
            <div className='absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0'></div>
          </div>
          <div>
            <h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl leading-tight'>
              {home.section3.title}
              <span className='text-primary-500'>
                {' '}
                {home.section3.overline}
              </span>
            </h1>
            <p className='mt-3 text-lg text-gray-800 dark:text-neutral-400'>
              {home.section3.body}
            </p>

            <div className='lh-branches mt-10 p-8 border border-dashed border-gray-300 rounded-2xl'>
              <h4 className='mb-[15px] text-[#000] xl:text-[20px] text-[18px] font-bold leading-[1.25]'>
                <i className='ri-arrow-right-up-line text-[18px] py-[10px] rotate-[42]'></i>{' '}
                {home.section3.subtitle}
              </h4>
              <ul className='list-disc columns-2 gap-4 mx-4 my-2'>
                {home.section3.carousel?.map((item) => (
                  <li className='p-2' key={item.body}>
                    <p className='text-sm'>{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-2 w-fit'>
              <ActionButton
                variant='default'
                icon='ic:baseline-arrow-outward'
                className='bg-transparent hover:text-primary-500 hover:bg-transparent'
                onClick={() =>
                  router.push(home.section3.button?.href as string)
                }
              >
                {home.section3.button?.title}
              </ActionButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
