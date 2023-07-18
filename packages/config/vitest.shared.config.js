const { configDefaults, defineConfig } = require('vitest/config');

module.exports = defineConfig({
  test: {
    globals: true,
    exclude: [...configDefaults.exclude],
    deps: {
      experimentalOptimizer: {
        web: { enabled: true },
        ssr: { enabled: true },
      },
    },
    benchmark: { reporters: ['default'] },
    reporters: ['default'],
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
    },
  },
});
