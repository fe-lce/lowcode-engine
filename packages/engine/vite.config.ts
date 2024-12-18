/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import { execSync } from 'child_process';

// get version from git branch name,
//  e.g. release/1.0.7 => 1.0.7
//       release/1.0.7-beta => 1.0.7 (beta)
//       release/1.0.7-beta.0 => 1.0.7 (beta)
function getVersion() {
  const gitBranchName = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' });
  const reBranchVersion = /^(?:[\w-]+\/)(\d+\.\d+\.\d+)(-?beta)?(?:\.\d+)?$/im;

  const match = reBranchVersion.exec(gitBranchName);
  if (!match) {
    console.warn(`[engine] gitBranchName: ${gitBranchName}`);
    return 'N/A';
  }

  const [_, version, beta] = match;

  return beta && beta.endsWith('beta') ? `${version}-beta` : version;
}

const releaseVersion = getVersion();

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
      VERSION_PLACEHOLDER: JSON.stringify(releaseVersion),
    },
    build: {
      input: 'src/index.ts',
      sourcemap: true,
      lib: {
        entry: './src/index.ts',
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
