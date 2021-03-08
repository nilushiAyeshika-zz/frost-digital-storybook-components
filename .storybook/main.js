const path = require('path');

module.exports = {
  stories: [
    // '../stories/Docs/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/stories/Atoms/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/Atoms/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/Molecules/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/Molecules/**/*.stories.@(js|jsx|ts|tsx)',
    // '../stories/Templates/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
}