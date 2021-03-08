import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/fontawesome-free-solid';

import IconButton from '../../../components/Molecules/IconButton';

export default {
  title: 'Components/Molecules/IconButton',
  component: IconButton,
  argTypes : {
    children: {
      control: { type: 'any' },
      description: 'Content',
      defaultValue: '',
    },
  }
};

const Template = (args) => <IconButton {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: <FontAwesomeIcon icon={faShoppingBasket} />,
  label: 'Cart',
  color: '',
  backgroundColor: '',
  pressedColor: '',
  disabledColor: '',
  hoverColor: '',
};
