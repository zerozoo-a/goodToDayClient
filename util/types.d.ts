export interface Result<T = any, K = any> {
  success: boolean;
  data: T;
  err: K;
}
