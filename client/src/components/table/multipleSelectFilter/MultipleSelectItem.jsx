import { Menu } from '@headlessui/react';
import { FaCheck } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';

const MultipleSelectItem = ({ fieldName, value, name }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const values = searchParams.get(fieldName);
  const valuesArray = values ? values.split(',') : [];
  const checked = valuesArray.includes(value);

  const handleSelectItem = (e) => {
    e.preventDefault();

    if (!checked) {
      searchParams.set(fieldName, [...valuesArray, value]);
    }

    if (checked) {
      const filteredArray = valuesArray.filter((v) => v !== value);
      if (!filteredArray.length) searchParams.delete(fieldName);
      if (filteredArray.length) searchParams.set(fieldName, filteredArray);
    }

    searchParams.set('page', 1);
    setSearchParams(searchParams);
  };

  return (
    <Menu.Item
      as="li"
      className="py-2 cursor-pointer flex items-center gap-x-4 pl-4 pr-12 group"
      onClick={handleSelectItem}
    >
      <div
        className={`border w-5 aspect-square flex items-center justify-center text-white group-hover:border-gray-300 ${
          checked ? 'bg-primary' : ''
        }`}
      >
        <FaCheck size={12} />
      </div>
      <span className="whitespace-nowrap">{name}</span>
    </Menu.Item>
  );
};

export default MultipleSelectItem;
