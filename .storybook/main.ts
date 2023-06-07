module.exports = {
  addons: ['@storybook/addon-essentials'],
  babel: async (options) => ({
    // Update your babel configuration here
    ...options,
  }),
  framework: {
    name: '@storybook/react-vite',
    options: {
      legacyRootApi: true,
    },
  },
  docs: {
    autodocs: 'tag',
  },
  
  stories: [
    '../src/**/*.mdx',
    // '../src/**/*.stories.@(js|mdx)', 
    '../src/**/*.stories.@(js|jsx|ts|tsx)'//<=LÍNEA ADICIONADA PARA LAS HISTORIAS
  ],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
};
