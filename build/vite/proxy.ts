import { API_BASE_URL, API_TARGET_URL, ONLINE_BASE_URL, ONLINE_TARGET_URL } from '../constant';
import { ProxyOptions } from 'vite';
type ProxyTargetList = Record<string, ProxyOptions>;

const init: ProxyTargetList = {
  // test
  [API_BASE_URL]: {
    target: API_TARGET_URL,
    changeOrigin: true,
    rewrite: (path) => path.replace(new RegExp(`^${API_BASE_URL}`), ''),
  },
  [ONLINE_BASE_URL]: {
    target: ONLINE_TARGET_URL,
    changeOrigin: true,
    rewrite: (path) => path.replace(new RegExp(`^${ONLINE_BASE_URL}`), ''),
  },
};

export default init;
