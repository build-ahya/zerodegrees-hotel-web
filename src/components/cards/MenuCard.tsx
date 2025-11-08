import Menu from '@/models/menu';
import { fCurrency } from '@/utils/formatNumber';
import Image from 'next/image';
import ActionButton from '../button';
import Icon from '../icon';

export default function MenuCard({
  item,
  horizontal,
  onClick,
}: {
  item: Menu;
  horizontal?: boolean;
  onClick: ({ ...item }: Menu) => void;
}) {
  if (horizontal) {
    return (
      <div className='relative flex items-center overflow-hidden'>
        <div className='flex flex-col justify-center items-center bg-primary-800 rounded-xl'>
          <Image
            src={item.image}
            alt={item.name}
            width={1000}
            height={1000}
            className='w-28 h-28 object-cover rounded-xl'
          />
        </div>
        <div className='grow p-4'>
          <div className=' flex flex-col justify-center'>
            <span className='block mb-1 text-xs font-semibold lowercase text-primary-500'>
              {item.category}
            </span>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white'>
              {item.name}
            </h3>
            <p className='mt-3 text-sm text-gray-500 dark:text-neutral-500'>
              {item.description}
            </p>
            {item?.sides?.length ? (
              <div>
                <div className='hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700'>
                  <div
                    className='hs-accordion pb-3 active'
                    id='hs-basic-with-title-and-arrow-stretched-heading-one'
                  >
                    <button
                      className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-sm text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400'
                      aria-expanded='true'
                      aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-one'
                    >
                      Sides
                      <Icon name='ic:baseline-keyboard-arrow-down' />
                    </button>
                    <div
                      id='hs-basic-with-title-and-arrow-stretched-collapse-one'
                      className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
                      role='region'
                      aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-one'
                    >
                      {item.sides.map((item, index) => (
                        <div
                          key={index}
                          className='flex items-center justify-between'
                        >
                          <p className='text-xs'>{item.name}</p>
                          <p className='text-xs font-medium'>
                            {fCurrency(item.price)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <div className='mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700'>
              <p className='w-full py-3 text-xl font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'>
                {fCurrency(item.price)}
              </p>
              <ActionButton variant='primary' onClick={() => onClick(item)}>
                Order Now
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70'>
      <div className='flex flex-col justify-center items-center bg-primary-800 rounded-t-xl'>
        <Image
          src={item.image}
          alt={item.name}
          width={1200}
          height={1200}
          className='w-full h-28 object-cover rounded-t-xl'
        />
      </div>
      <div className='p-4'>
        <span className='block mb-1 text-xs font-semibold lowercase text-primary-500'>
          {item.category}
        </span>
        <h3 className='text-lg font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white capitalize'>
          {item.name}
        </h3>
        <p className='mt-3 text-sm text-gray-500 dark:text-neutral-500'>
          {item.description}
        </p>
        {item?.sides?.length ? (
          <div>
            <div className='hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700'>
              <div
                className='hs-accordion pb-3 active'
                id='hs-basic-with-title-and-arrow-stretched-heading-one'
              >
                <button
                  className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-sm text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400'
                  aria-expanded='true'
                  aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-one'
                >
                  Sides
                  <Icon name='ic:baseline-keyboard-arrow-down' />
                </button>
                <div
                  id='hs-basic-with-title-and-arrow-stretched-collapse-one'
                  className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
                  role='region'
                  aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-one'
                >
                  {item.sides.map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between'
                    >
                      <p className='text-xs'>{item.name}</p>
                      <p className='text-xs font-medium'>
                        {fCurrency(item.price)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {item?.variants?.length ? (
          <div>
            <div className='hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700'>
              <div
                className='hs-accordion pb-3 active'
                id='hs-basic-with-title-and-arrow-stretched-heading-one'
              >
                <button
                  className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-sm text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400'
                  aria-expanded='true'
                  aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-one'
                >
                  Variants
                  <Icon name='ic:baseline-keyboard-arrow-down' />
                </button>
                <div
                  id='hs-basic-with-title-and-arrow-stretched-collapse-one'
                  className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
                  role='region'
                  aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-one'
                >
                  {item.variants.map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between'
                    >
                      <Image
                        src={item.image}
                        alt='...'
                        width={200}
                        height={200}
                        className='w-10 h-10 object-cover rounded-full'
                      />
                      <div>
                        <p className='text-xs font-bold'>{item.name}</p>
                        <p className='text-xs'>
                          {fCurrency(item.price)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className='mt-auto flex justify-between border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700'>
        <p className='w-full py-3 px-4 text-md font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'>
          {fCurrency(item.price)}
        </p>
        <ActionButton variant='primary' onClick={() => onClick(item)}>
          Order Now
        </ActionButton>
      </div>
    </div>
  );
}
