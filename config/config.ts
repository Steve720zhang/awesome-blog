import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  tailwindcss: {
    tailwindCssFilePath: '@/styles/tailwind.css',
    tailwindConfigFilePath: 'tailwind.config.js', // 默认取值 tailwindConfigFilePath || join(process.env.APP_ROOT || api.cwd, 'tailwind.config.js'),
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:3000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
