import React from 'react';

import Heading from '../../../components/Atoms/Typography';

export default {
  title: 'Components/Atoms/Typography',
  component: Heading,
  argTypes : {
    children: {
      control: { type: 'text' },
      description: 'Content',
      defaultValue: '',
    },
  }
};

const Template = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  children: 'Heading 1',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
  children: 'Heading 2',
};

export const H6 = Template.bind({});
H6.args = {
  variant: 'h6',
  children: 'Heading 6',
};
