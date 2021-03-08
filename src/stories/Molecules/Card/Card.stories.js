import React from 'react';

import Card from '../../../components/Molecules/Card';

export default {
  title: 'Components/Molecules/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    children: {
      control: { type: 'any' },
      description: 'Content',
      defaultValue: '',
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  onClick: () => null,
  title: 'Product one',
  subTitle: '$1000',
  size: '28%',
  imgSrc: 'https://media.petsathome.com/wcsstore/pah-cas01//300/P3064L.jpg',
  altText: 'cat product',
  children: '',
};
