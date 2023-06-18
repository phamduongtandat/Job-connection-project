import React from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

const Select = React.forwardRef((props, ref) => {
  const { className, errorMessage, hasError, ...selectProps } = props;

  return (
    <div className="relative">
      <select
        {...selectProps}
        className={`h-10 w-full rounded-md px-2 bg-transparent border border-border outline-dark cursor-pointer appearance-none ${className} ${
          hasError ? 'border-error' : ''
        }`}
        ref={ref}
      >
        {props.children}
      </select>
      <span
        className={`absolute top-1/2 -translate-y-1/2 right-3 ${
          hasError ? 'text-error' : ''
        }`}
      >
        <HiOutlineChevronDown />
      </span>
    </div>
  );
});

export default Select;
