import { ComponentStory } from '@storybook/react';
import Primary from './Primary';
import { mockPrimaryProps } from './Primary.mocks';

export default {
  title: 'templates/Primary',
  component: Primary,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Primary> = (args) => (
  <Primary {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPrimaryProps.base,
};
