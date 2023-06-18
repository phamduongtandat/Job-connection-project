import Component from './Label';

const meta = {
  title: 'form/Label',
  component: Component,
  tags: ['autodocs'],
};

export const Label = {
  args: {
    children: 'Số điện thoại:',
  },
};

export const CustomClassName = {
  args: {
    children: 'Số điện thoại:',
    className: 'bg-dark text-white',
  },
};

export default meta;
