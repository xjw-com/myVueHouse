/**
 * @name:visualizer
 * @description:打包体积分析配置
 */

import visualizer from 'rollup-plugin-visualizer';
import { ANALYSIS } from '../../constant';

export function ConfigVisualizerConfig() {
  if (ANALYSIS) {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    });
  }
  return [];
}
