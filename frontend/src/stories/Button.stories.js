import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'forms/inputs/Input',
  component: Button,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    className: 'bg-red-400 text-green-400',
  },
};

export const Secondary = {
  args: {
    className: 'bg-green-400',
  },
};
