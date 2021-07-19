function paramsClosure(params?: any) {
  const memo: any = {};
  function setParams(params: any) {
    memo[params.key] = params;
  }
  function getParams(key: string) {
    return memo[key];
  }
  return { setParams, getParams };
}
const paramsClosureRes = paramsClosure();
export const doFuncWithThrottle = (
  timerObject: any,
  cb: Function,
  params: any,
) => {
  if (!timerObject) {
    cb();
    paramsClosureRes.setParams(params);
    timerObject = setTimeout(() => {
      cb(paramsClosureRes.getParams(params.key));
      clearTimeout(timerObject);
      timerObject = null;
    }, 100);
  } else {
    paramsClosureRes.setParams(params);
  }
};
