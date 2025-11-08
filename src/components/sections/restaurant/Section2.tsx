'use client';

import { MenuCard } from '@/components/cards';
import { Input } from '@/components/forms/Input';
import Container from '@/components/container';
import restaurantMenu from '@/demo/menu';
import classNames from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import Menu from '@/models/menu';
import Empty from '@/components/empty';
import Modal from '@/components/modal';
import { OrderForm } from '@/components/forms';

export default function RestaurantSection2() {
  const [keyword, setKeyword] = useState('');
  const [type, setType] = useState('all');
  const [category, setCategory] = useState('all');
  const [result, setResult] = useState<Menu[]>([]);
  const [selected, setSelected] = useState<Menu | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const types = [...new Set(restaurantMenu.map((item) => item.type))];

  const categories = useMemo(
    () => [
      ...new Set(
        restaurantMenu
          .filter((itm) => (type === 'all' ? itm.type : itm.type === type))
          .map((item) => item.category)
      ),
    ],
    [type]
  );

  const menus = useMemo(() => {
    const all = categories.map((category) => ({
      category,
      items: restaurantMenu.filter((item) => item.category === category),
    }));

    if (category !== 'all') {
      return all.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (type !== 'all') {
      return all.map((item) => ({
        category: item.category,
        items: item.items.filter(
          (itm) => itm.type.toLowerCase() === type.toLowerCase()
        ),
      }));
    }

    return all;
  }, [category, type, categories]);

  const handleClick = (item: Menu) => {
    setSelected(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (keyword) {
      const filteredMenus = restaurantMenu.filter((item) =>
        Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(keyword.toLowerCase())
      );
      setResult(filteredMenus);
    }
  }, [keyword]);

  return (
    <section className='py-10 sm:py-20'>
      <Container className='pb-4' maxWidth='max-w-screen-sm'>
        <Input
          id='search'
          label='search'
          value={keyword}
          onChange={(evt) => setKeyword(evt.target.value)}
          icon='mdi:search'
          placeholder='Search Food'
          className='px-4'
          autoFocus
        />

        <div className='p-4 sm:px-6 lg:px-8 my-2'>
          <p className='me-2 inline-block text-xs text-gray-800 text-center dark:text-neutral-200'>
            If you have a food allergy, intolerance or sensitivity, please speak
            to our waiter about ingredients before you order your meal.
          </p>
        </div>
      </Container>

      <Container maxWidth='max-w-screen-sm'>
        {!keyword ? (
          <ul className=' text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm sm:flex dark:divide-gray-700 dark:text-gray-400'>
            {['all', ...types].map((tp, index) => (
              <li key={index} className='w-full focus-within:z-10'>
                <button
                  onClick={() => setType(tp)}
                  className={classNames(
                    'inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white',
                    {
                      'bg-primary-700 text-white': tp === type,
                      'rounded-s-2xl': index === 0,
                      'rounded-e-2xl': index === types.length
                    }
                  )}
                  aria-current='page'
                >
                  {tp}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>

      {keyword ? (
        <Container maxWidth='max-w-screen-md'>
          <div className='flex flex-col gap-8'>
            {result.length ? (
              result.map((item) => (
                <MenuCard
                  item={item}
                  key={item.id}
                  onClick={handleClick}
                  horizontal
                />
              ))
            ) : (
              <Empty message={'no result found'} />
            )}
          </div>
        </Container>
      ) : (
        <Container>
          <div className='grid md:grid-cols-6 gap-10'>
            <div className='md:col-span-5'>
              {menus.map((item, index) => (
                <div
                  className={classNames('py-10 sm:py-20', {
                    'bg-[#f7f5f1]': index % 2 !== 0,
                  })}
                  key={index}
                >
                  <h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl capitalize leading-tight mb-6'>
                    {item.category}
                  </h1>
                  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {item.items.map((menu) => (
                      <MenuCard
                        item={menu}
                        key={menu.id}
                        onClick={handleClick}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className='md:col-span-1 order-first md:order-last flex sm:flex-col flex-wrap gap-2 p-4'>
              {['all', ...categories].map((ctg) => (
                <button
                  key={ctg}
                  className={classNames(
                    'px-4 py-2 rounded-full bg-gray-200 text-gray-500 uppercase w-fit',
                    {
                      'bg-primary-500 text-white': ctg === category,
                    }
                  )}
                  onClick={() => setCategory(ctg)}
                >
                  {ctg}
                </button>
              ))}
            </div>
          </div>
        </Container>
      )}

      <Modal
        title={`Place order for ${selected?.name}`}
        isOpen={openModal}
        onClose={handleCloseModal}
      >
        <OrderForm menu={selected as Menu} onClose={handleCloseModal} />
      </Modal>
    </section>
  );
}
