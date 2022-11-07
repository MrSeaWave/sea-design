import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);

export default defineConfig({
  build: {
    // 打包输出的目录 lib:cjs, es:mjs, dist: unpkg
    outDir: 'lib',
    lib: {
      // 组件库源码的入口文件
      entry: './src/index.tsx',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: isExternal,
      // output: {
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //   globals: {
      //     react: 'React',
      //   },
      // },
      output: [
        {
          format: 'cjs',
          // 不用打包成.mjs
          entryFileNames: '[name].js',
          // 让打包目录和我们目录对应
          preserveModules: true,
          // 配置打包根目录
          dir: 'lib',
          preserveModulesRoot: 'src',
        },
        {
          format: 'es',
          // 不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          // 让打包目录和我们目录对应
          preserveModules: true,
          // 配置打包根目录
          dir: 'es',
          preserveModulesRoot: 'src',
        },
      ],
    },
  },
  plugins: [
    dts(),
    // 因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
    dts({
      outputDir: 'es',
    }),
  ],
});
