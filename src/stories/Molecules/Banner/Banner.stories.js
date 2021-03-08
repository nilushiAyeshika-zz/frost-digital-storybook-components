import React from 'react';

import Banner from '../../../components/Molecules/Banner';

export default {
  title: 'Components/Molecules/Banner',
  component: Banner,
  argTypes : {
    children: {
      control: { type: 'any' },
      description: 'Content',
      defaultValue: '',
    },
  }
};

const Template = (args) => <Banner {...args} />;

export const Large = Template.bind({});
Large.args = {
  title: 'Product one',
  size: 'large',
  imgSrc: 'https://cdn.petbarn.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/123110_1_n_animates-cushion-slicker-cat-brush_1.jpg',
  children: '',
  altText: 'Banner',
};

export const Small = Template.bind({});
Small.args = {
  title: 'Product one',
  size: 'small',
  imgSrc: 'https://cdn.petbarn.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/123110_1_n_animates-cushion-slicker-cat-brush_1.jpg',
  children: '',
  altText: 'Banner',
};
