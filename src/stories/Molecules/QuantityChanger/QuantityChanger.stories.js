import React from 'react';

import QuantityChanger from '../../../components/Molecules/QuantityChanger';

export default {
  title: 'Components/Molecules/QuantityChanger',
  component: QuantityChanger,
};

const Template = (args) => <QuantityChanger {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  defaultValue: 1,
};
