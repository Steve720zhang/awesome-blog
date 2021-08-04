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

export const example = async (req: DoRequestDTO) => {
  return request('/api/example', req);
};
export const doLogin = async (req: any) => {
  return request('/api/app/auth/login', {
    data: { username: req.username, password: req.password },
    method: 'POST',
  });
};
export const getAllUser = async (req: DoRequestDTO) => {
  return request('/api/user', req);
};
