import Input from './Input';

const meta = {
  component: Input,
  title: 'inputs/Input',
  tags: ['autodocs'],
};

export const ValidInput = {
  args: {
    placeholder: 'Tên tài khoản',
    type: 'text',
  },
};

export const InvalidInput = {
  args: {
    placeholder: 'Tên tài khoản',
    hasError: true,
  },
};

export const CustomClassName = {
  args: {
    placeholder: 'using className props to add custom className',
    className: 'border-2 border-green-400',
  },
};

export default meta;
