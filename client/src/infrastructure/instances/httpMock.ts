// src/infrastructure/instances/httpAxios.ts

import { Http } from '@/domain/repositories/httpRepository';
import { queueListMock } from '@/mocks/queue';

export const httpFake: Http = {
  get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = queueListMock;
    return response as unknown as T;
  },
  post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = queueListMock;
    return response;
  },
  put: async <T>(path: string, params?: Record<string, any>, config?: any) => undefined,
  delete: async <T>(path: string, params?: any, config?: any) => undefined,
};
