import { useForm } from 'react-hook-form';
import Component from './ListBox';

const meta = {
  component: Component,
  title: 'inputs/ListBox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Cái props control là được lấy ra từ useForm của react-hook-form',
      },
    },
  },
};

const Template = (args) => {
  const { control } = useForm();
  return <Component {...args} control={control} />;
};

// single select
export const SingleSelect = Template.bind({});
SingleSelect.args = {
  options: [
    { displayText: 'Cá nhân', value: 'personal' },
    { displayText: 'Doanh nghiệp', value: 'business' },
  ],
  fieldName: 'fields',
  placeholder: 'Chọn loại tài khoản',
};

// multiple select
export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  options: [
    { displayText: 'Lập trình website', value: 'code' },
    { displayText: 'Viết content marketing', value: 'copywritting' },
  ],
  fieldName: 'fields',
  placeholder: 'Chọn một hoặc nhiều lĩnh vực',
  multiple: true,
};

// multiple select
export const InvalidInput = Template.bind({});
InvalidInput.args = {
  options: [
    { displayText: 'Lập trình website', value: 'code' },
    { displayText: 'Viết content marketing', value: 'copywritting' },
  ],
  fieldName: 'fields',
  placeholder: 'Chọn một hoặc nhiều lĩnh vực',
  multiple: true,
  hasError: true,
};

export default meta;
