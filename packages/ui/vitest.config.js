const { defineConfig } = require('vitest/config');
const react = require('@vitejs/plugin-react');
/**@type {import('vitest/config').UserConfig} */
const sharedConfigs = require('config/vitest.shared.config');

module.exports = defineConfig({
  ...sharedConfigs,
  plugins: [react()],
  test: {
    ...sharedConfigs.test,
    environment: 'jsdom',
  },
});
