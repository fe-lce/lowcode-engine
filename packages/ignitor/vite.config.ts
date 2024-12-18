/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import lernaConfig from '../../lerna.json';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react({
        tsDecorators: true,
      }),
      dts({
        entryRoot: 'src/',
      }),
    ],
    define: {
      'process.env': {
        NODE_ENV: mode,
      },
      VERSION_PLACEHOLDER: JSON.stringify(lernaConfig.version),
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: '../../vitest.setup.ts',
    },
    preview: {
      port: 5555,
      strictPort: true,
    },
    server: {
      port: 5555,
      strictPort: true,
    },
    build: {
      lib: {
        entry: '../engine/src/index.ts',
        fileName: (format, entryName) => `engine-core.${format}.js`,
        name: 'AliLowCodeEngine',
        cssFileName: 'engine-core',
      },
      rollupOptions: {
        output: {
          exports: 'named',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            '@alifd/next': 'Next',
            moment: 'moment',
            lodash: '_',
            'prop-types': 'PropTypes',
            '@felce/lowcode-engine': 'AliLowCodeEngine',
            '@felce/lowcode-engine-ext': 'AliLowCodeEngineExt',
          },
        },
        external: [
          'react',
          'react-dom',
          'prop-types',
          'moment',
          'lodash',
          '@alifd/next',
          '@felce/lowcode-engine',
          '@felce/lowcode-engine-ext',
        ],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions
          api: 'legacy',
        },
      },
    },
  };
});
