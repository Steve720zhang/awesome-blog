function paramsClosure(params?: any) {
  let memo: any = {};
  function setParams(params: any) {
    memo[params.key] = params;
  }
  function getParams(key: string) {
    return memo[key];
  }
  function clearData() {
    return (memo = {});
  }
  return { setParams, getParams, clearData };
}
const paramsClosureRes = paramsClosure();
let timer: any = null;
export const doFuncWithThrottle = (cb: Function, params: any) => {
  if (!timer) {
    timer = setTimeout(() => {
      const gotParams = paramsClosureRes.getParams(params.key);
      cb(gotParams);
      clearTimeout(timer);
      timer = null;
      paramsClosureRes.clearData();
    }, 30);
  }
  paramsClosureRes.setParams(params);
};
