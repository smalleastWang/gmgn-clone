// src/utils/axiosInstance.ts
import { userStore } from '@/store/user';
import axios, {AxiosError} from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


// ✅ 请求拦截器：自动添加 token
axiosInstance.interceptors.request.use(
  (config) => {
    const {token} = userStore()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ 响应拦截器：统一处理错误
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const status = error.response?.status;

    // 🔐 401 未授权
    if (status === 401) {
      console.error('登录信息失效，请重新登录');
      localStorage.removeItem('token'); // 或重置 Zustand
      window.location.href = '/login'; // 跳转登录
    }

    // ❌ 403 无权限
    if (status === 403) {
      console.info('您没有权限执行此操作');
    }

    // 🌐 500+ 服务器错误
    if (status && status >= 500) {
      console.error('服务器异常，请稍后再试');
    }

    // 🌐 网络错误 / 无响应
    if (!error.response) {
      console.error('网络连接失败，请检查网络');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
