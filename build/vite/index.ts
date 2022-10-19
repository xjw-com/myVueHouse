/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VitePluginCertificate from 'vite-plugin-mkcert';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { ConfigSvgIconsPlugin } from './plugins/svgIcons';
import { AutoRegistryComponents } from './plugins/component';
import { AutoImportDeps } from './plugins/autoImport';
import { ConfigMockPlugin } from './plugins/mock';
import { ConfigVisualizerConfig } from './plugins/visualizer';
import { ConfigCompressPlugin } from './plugins/compress';
import { ConfigPagesPlugin } from './plugins/pages';
import { ConfigRestartPlugin } from './plugins/restart';
import { ConfigProgressPlugin } from './plugins/progress';
import { ConfigImageminPlugin } from './plugins/imagemin';
import { ConfigUnocssPlugin } from './plugins/unocss';

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    // setup语法糖组件名支持
    vueSetupExtend(),
    // 提供https证书
    VitePluginCertificate({
      source: 'coding',
    }) as PluginOption,
  ];

  // 自动按需引入组件
  vitePlugins.push(AutoRegistryComponents());

  // 自动按需引入依赖
  vitePlugins.push(AutoImportDeps());

  // 自动生成路由
  vitePlugins.push(ConfigPagesPlugin());

  // 开启.gz压缩  rollup-plugin-gzip
  vitePlugins.push(ConfigCompressPlugin());

  // 监听配置文件改动重启
  vitePlugins.push(ConfigRestartPlugin());

  // 构建时显示进度条
  vitePlugins.push(ConfigProgressPlugin());

  // unocss
  vitePlugins.push(ConfigUnocssPlugin());

  // vite-plugin-svg-icons
  vitePlugins.push(ConfigSvgIconsPlugin(isBuild));

  // vite-plugin-mock
  vitePlugins.push(ConfigMockPlugin(isBuild));

  // rollup-plugin-visualizer
  vitePlugins.push(ConfigVisualizerConfig());

  vitePlugins.push(ConfigImageminPlugin());

  return vitePlugins;
}
