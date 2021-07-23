export const isEmpty = (target: any): boolean => {
  if (typeof target === 'object') {
    if (target instanceof Array) {
      return !!target.length;
    } else {
      return !!Object.keys(target).length;
    }
  } else {
    return !!target;
  }
};

const getOnce = (currentTarget: any, key: any): any =>
  currentTarget[key] ? currentTarget[key] : undefined;

export const get = (target: any, path: string): any => {
  const paths = path.split('.');
  if (!paths.length) {
    return target;
  }
  let currentObj = target;
  while (!isEmpty(paths)) {
    const currentParam = paths.shift();
    const newObj = getOnce(currentObj, currentParam);
    if (newObj === undefined) {
      return undefined;
    }
    currentObj = newObj;
  }
  return currentObj;
};
