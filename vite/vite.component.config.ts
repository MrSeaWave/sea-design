import { mergeConfig } from 'vite';
import base from './vite.base.config';

export default mergeConfig(base, {
  esbuild: {
    jsxInject: "import React from 'react'",
  },
});
