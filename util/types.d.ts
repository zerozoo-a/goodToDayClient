export interface Result<B = boolean, T = any, K = any> {
  success: B;
  data: T;
  err: K;
}
