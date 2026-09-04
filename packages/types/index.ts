export type ID = string;

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  request_id?: string;
}
