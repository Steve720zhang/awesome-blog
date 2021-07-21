export const getContants = (key: string) => {
  if (process.env.NODE_ENV !== 'development') {
    try {
      const json = require('./.constant.prd.json');
      if (json[key]) {
        return json[key];
      }
    } catch (e: any) {
      return loadDevConstants(key);
    }
  }
  return loadDevConstants(key);
};

const loadDevConstants = (key: string) => {
  const json = require('./.constant.json');
  if (json[key]) {
    return json[key];
  }
  return 'no data';
};
