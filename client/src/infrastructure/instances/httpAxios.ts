import { Http } from '@/domain/repositories/httpRepository';
import httpClient from '@/api';

const headers = {
  'Content-Type': 'application/json',
};

export const httpAxios: Http = {
  get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await httpClient.get(path, { ...config, params, headers });
    return response.data as T;
  },
  post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await httpClient.post(path, { ...params }, { ...config, headers });
    return response.data as T;
  },
  put: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await httpClient.put(path, { ...params }, { ...config, headers });
    return response.data as T;
  },
  delete: async <T>(path: string, params?: any, config?: any) => {
    const response = await httpClient.delete(path, { ...config, params, headers });
    return response.data as T;
  },
};
