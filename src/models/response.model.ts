export interface Response<T> {
  msg?: string;
  data?: T;
  ok: boolean;
}

export interface ErrorResponse<T> extends Response<T> {
  msg: string;
  ok: false;
  data?: T;
}

export interface OkResponse<T> extends Response<T> {
  ok: true;
  data: T;
}
