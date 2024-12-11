/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts({
    entryRoot: 'src/',
  })],
  define: {
    'process.env': {},
  },
  build: {
    lib: {
      entry: './src/index.ts',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      name: 'LowcodeEngineWorkSpace',
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
        },
      },
      external: ['react', 'react-dom', 'prop-types', 'moment', 'lodash', '@alifd/next'],
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
});
