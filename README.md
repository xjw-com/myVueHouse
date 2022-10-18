# 项目创建步骤

## 安装依赖

1. pnpm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-define-config eslint-plugin-prettier eslint-plugin-vue prettier -D
2. 新增.eslintignore .eslintrc.js .prettierignore prettier.config.js 文件
3. pnpm install husky lint-staged -D
4. pnpm dlx husky-init 修改.hucky/pre-commit
5. pnpm stylelint stylelint-config-prettier stylelint-config-recommendedstylelint-config-recommended-vue stylelint-config-standard stylelint-order stylelint-config-html stylelint-config-recommended-scss stylelint-config-standard-scss postcss postcss-html -D
6. pnpm install less less-loader postcss-less postcss-px-to-viewport -D
7. 新增 .stylelintignore postcss.config.js stylelint.config.js
8. pnpm install postcss-pxtorem autoprefixer -D
9. 新增 src/utils/rem.ts
10. pnpm install @vitejs/plugin-vue-jsx -D
11. pnpm install @types/qs -D [处理参数]
12. pnpm install nprogress @types/nprogress -D [进度条组件]
13. pnpm install rollup-plugin-visualizer -D [打包提交分析插件]
14. pnpm install unocss -D
15. pnpm install unplugin-auto-import -D [自动导入]
16. pnpm install unplugin-icons -D [自定义图标]
17. pnpm install unplugin-vue-components -D [按需导入组件]
18. pnpm install import mockjs plop -D
19. pnpm install vite-plugin-compression vite-plugin-html vite-plugin-imagemin vite-plugin-mkcert vite-plugin-mock vite-plugin-pages vite-plugin-progress vite-plugin-restart vite-plugin-style-import vite-plugin-svg-icons vite-plugin-vue-images vite-plugin-vue-setup-extend -D
20. pnpm install @vueuse/components @vueuse/core axios dayjs mitt pinia pinia-plugin-persistedstate qs vue-router

21. 新增 .env.development .env.production .env.test plopfile.js

    "@vueuse/components": "^9.3.0", "@vueuse/core": "^9.3.0", "axios": "^1.1.3", "dayjs": "^1.11.5",

    "mitt": "^3.0.0", "pinia": "^2.0.23", "pinia-plugin-persistedstate": "^2.3.0", "qs": "^6.11.0", "vue-router": "^4.1.5"
