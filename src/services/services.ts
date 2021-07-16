import request from '@/services/request';
type DoRequestDTO = {
  Method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  query?: {
    [key: string]: any;
  };
  data?: {
    [key: string]: any;
  };
  headers?: {
    [key: string]: any;
  };
};

export const example = async (req: DoRequestDTO) =>
  request('/api/example', req);
export const doLogin = async (req: DoRequestDTO) => request('/api/login', req);
