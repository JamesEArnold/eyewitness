export interface Http {
  get: <T>(path: string, params?: Record<string, unknown>, config?: unknown) =>
    Promise<T>;
  post: <T>(path: string, params?: Record<string, unknown>, config?: unknown) =>
    Promise<T | unknown>;
  put: <T>(path: string, params?: Record<string, unknown>, config?: unknown) =>
    Promise<T | unknown>;
  delete: <T>(path: string, params?: unknown, config?: unknown) => Promise<T | unknown>;
}
