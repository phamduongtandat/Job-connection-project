import Component from './ErrorMessage';

const meta = {
  component: Component,
  title: 'form/ErrorMessage',
  tags: ['autodocs'],
};

export const ErrorMessage = {
  args: {
    errorMessage: 'Số điện thoại không hợp lệ',
  },
};

export const CustomClassName = {
  args: {
    errorMessage: 'Số điện thoại không hợp lệ',
    className: 'bg-dark text-white',
  },
};

export default meta;
