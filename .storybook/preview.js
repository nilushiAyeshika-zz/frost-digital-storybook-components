import React from 'react';
import { addDecorator } from '@storybook/react';
// import { ThemeProvider } from '@material-ui/core/styles';

// import { theme } from '../lib/Setup/MaterialUI';

addDecorator(story => (
  <div>
    {story()}
  </div>
));

export const parameters = { actions: { argTypesRegex: "^on[A-Z].*" } };
