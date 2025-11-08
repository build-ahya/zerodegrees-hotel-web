import { useMemo, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Icon from '../icon';
import Room from '@/models/room';

const FilterList = ({ items }: { items: Room[] }) => {
  const [filterBy, setFilterBy] = useState({
    beds: '',
    amenities: ''
  });
  const [sortBy, setSortBy] = useState('Default');

  const filterOptions = useMemo(() => {
    return {
      beds: Array.from(new Set(items?.map((item) => `${item.bedroom} Beds`))) ?? [],
      amenities: Array.from(
        new Set(
          items?.flatMap((item) =>
            item.amenities.map((feature) => feature.label)
          )
        )
      ) ?? []
    };
  }, [items]);

  const sortOptions = [
    { value: 'Default', label: 'Default' },
    { value: 'Newest', label: 'Newest' },
    { value: 'LowToHigh', label: 'Low to High' },
    { value: 'HighToLow', label: 'High to Low' },
  ];

  return (
    <div className='flex flex-col md:flex-row md:items-end md:gap-4'>
      {/* Filter By */}
      <div className='flex items-center md:grow gap-2 relative'>
        <label className='text-sm font-light text-gray-700'>Filter By:</label>
        <div className='flex flex-wrap md:gap-4'>
          {Object.entries(filterOptions).map(([category, options]) => (
            <Menu
              as='div'
              key={category}
              className='relative inline-block text-left'
            >
              <div className='flex flex-col gap-2'>
                <MenuButton className='px-4 py-2 flex items-center'>
                  {(filterBy as Record<string, string>)[category] ||
                    category.charAt(0).toUpperCase() + category.slice(1)}
                  <Icon name='mdi-chevron-down' color='ml-2 inline-block' />
                </MenuButton>
                <MenuItems className='absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-10'>
                  {options.map((option, index) => (
                    <MenuItem key={index}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-blue-500 text-white' : 'text-gray-700'
                          } px-4 py-2 w-full text-left`}
                          onClick={() =>
                            setFilterBy((prev) => ({
                              ...prev,
                              [category]: option,
                            }))
                          }
                        >
                          {option}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </div>
            </Menu>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className='flex items-center gap-2 relative'>
        <label className='text-sm font-light text-gray-700'>Sort By:</label>
        <Menu as='div' className='relative inline-block text-left'>
          <MenuButton className='px-3 py-2 flex items-center'>
            {sortBy}
            <Icon name='mdi-chevron-down' color='ml-2' />
          </MenuButton>
          <MenuItems className='absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-10'>
            {sortOptions.map((option) => (
              <MenuItem key={option.value}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-700'
                    } px-4 py-2 w-full text-left`}
                    onClick={() => setSortBy(option.label)}
                  >
                    {option.label}
                  </button>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default FilterList;
