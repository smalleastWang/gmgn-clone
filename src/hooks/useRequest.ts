
import { useState, useEffect, useCallback } from 'react';
import axiosInstance from '@/utils/request/axiosInstance';

type Method = 'get' | 'post' | 'put' | 'delete';

interface UseRequestOptions<T = any> {
  method?: Method;
  url: string;
  data?: any;
  params?: any;
  manual?: boolean;           // 是否手动触发请求
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
  deps?: any[];               // 依赖变化重新触发请求
}

export function useRequest<T = any>({
  method = 'get',
  url,
  data,
  params,
  manual = false,
  onSuccess,
  onError,
  deps = [],
}: UseRequestOptions<T>) {
  const [loading, setLoading] = useState(!manual);
  const [error, setError] = useState<any>(null);
  const [response, setResponse] = useState<T | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axiosInstance.request<T>({
        method,
        url,
        data,
        params,
      });
      setResponse(res.data);
      onSuccess?.(res.data);
    } catch (err) {
      setError(err);
      onError?.(err);
    } finally {
      setLoading(false);
    }
  }, [method, url, JSON.stringify(data), JSON.stringify(params)]); // 避免引用导致死循环

  useEffect(() => {
    if (!manual) {
      fetchData();
    }
  }, [fetchData, ...deps]);

  return {
    loading,
    error,
    data: response,
    refetch: fetchData,
  };
}