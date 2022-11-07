import { mergeConfig } from 'vite';
import base from './vite.base.config';

export default mergeConfig(base, {
  build: {
    lib: {
      entry: './src/index.ts',
    },
  },
});
