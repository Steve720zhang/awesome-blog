/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { message } from 'antd';
import { extend, ResponseError } from 'umi-request';
import Cookies from 'js-cookie';

const codeMessage: { [index: number]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/**
 * 异常处理程序
 */

const errorHandler = (error: ResponseError) => {
  const { response } = error;
  let errorData = {};
  if (response && response.status) {
    const { status, url } = response;
    if (status === 401) {
      // 登录状态失效
      // if (window.location.hash.indexOf('/redirect') === -1) {
      //     // 跳转手动重新登录
      //     if (url.indexOf('/api/v1/hrm/user/current') === -1) {
      //         window.location.replace(`${window.location.pathname}#/login`);
      //     }
      // }
    } else if (Math.floor(status / 100) === 5) {
      errorData = {
        message: `请求失败：${codeMessage[status] || codeMessage[500]}`,
      };
    } else {
      errorData = { message: '请求失败：您的网络发生异常，无法连接服务器' };
    }
  } else if (!response) {
    errorData = { message: '请求失败：您的网络发生异常，无法连接服务器' };
  }
  throw errorData;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler,
  // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});
request.interceptors.request.use((url, options) => {
  // 此处为拦截器，每次发送请求之前判断能否取到token
  const token = Cookies.get('token');
  const tokenHead = Cookies.get('tokenHead');
  if (tokenHead && token) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `${tokenHead}${token}`,
    };
    return {
      url,
      options: { ...options, headers },
    };
  }
  return {
    url,
    options: { ...options },
  };
});

// 注意：根据后端的约定，401等错误码的http status依然为200，401等状态码另拿字段传递。
// 所以在此在此进行设定（对上述的errorHandler进行补充，即上述的errorHandler只能在网络错误的情况下进行处理）
request.interceptors.response.use(async (response) => {
  const contentType: string = response.headers.get('Content-Type') || '';
  if (contentType.indexOf('json') !== -1) {
    const bodyPreCheck = await response.clone().json();
    if (bodyPreCheck && bodyPreCheck.code) {
      if (bodyPreCheck.code === 401) {
        // if (window.location.hash.indexOf('/login') === -1) {
        // message.error('您的登陆已过期，请重新登陆。');
        // window.location.replace(`${window.location.pathname}#/login`);
        // }
      }
      // else if (cases....){}
    }
  }
  return response;
});
export default request;
