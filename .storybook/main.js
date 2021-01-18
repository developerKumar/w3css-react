module.exports = {
  // .storybook/main.js

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  stories: ['../packages/**/*.stories.tsx', '../packages/**/*.stories.ts'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};
