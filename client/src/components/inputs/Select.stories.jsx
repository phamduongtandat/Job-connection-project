import Component from './Select';

const meta = {
  component: Component,
  title: 'inputs/Select',
  tags: ['autodocs'],
};

const children = (
  <>
    <option value="" disabled>
      Loại tài khoản
    </option>
    <option value="personal">Cá nhân</option>
    <option value="business">Doanh nghiệp</option>
  </>
);

export const ValidSelect = {
  args: {
    defaultValue: '',
    children,
  },
};

export const InvalidSelect = {
  args: {
    defaultValue: '',
    children,
    hasError: true,
  },
};

export const CustomClassName = {
  args: {
    defaultValue: '',
    children,
    className: 'bg-red-400 text-white',
  },
};

export default meta;
