import { ComponentStory } from '@storybook/react';
import ServiceCard from './ServiceCard';
import { mockServiceCardProps } from './ServiceCard.mocks';

export default {
  title: 'templates/ServiceCard',
  component: ServiceCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ServiceCard> = (args) => (
  <ServiceCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockServiceCardProps.base,
};
