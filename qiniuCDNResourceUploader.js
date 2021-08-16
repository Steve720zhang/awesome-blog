const qiniu = require('qiniu');
const fs = require('fs');
const path = require('path');

const constants = require('./src/utils/.constant.prd.json');
const constants2 = require('./src/utils/.constant.json');

const distFiles = fs.readdirSync('./dist');
const targets = distFiles.filter(
  (path) => path.endsWith('.js') || path.endsWith('.css'),
);
const targets2 = targets.map((file) => path.resolve('./dist', file));

const accessKey = constants.accessKey || constants2.accessKey;
const secretKey = constants.secretKey || constants2.secretKey;
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

const options = {
  scope: 'online-auto',
  expires: 7200,
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

var config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z0;

var formUploader = new qiniu.form_up.FormUploader(config);
var putExtra = new qiniu.form_up.PutExtra();
// 文件上传
targets2.forEach((filePath) => {
  const filePaths = filePath.split('/');
  formUploader.putFile(
    uploadToken,
    filePaths[filePaths.length - 1],
    filePath,
    putExtra,
    function (respErr, respBody, respInfo) {
      console.log('respErr, respBody, respInfo:', respErr, respBody, respInfo);
      if (respErr) {
        throw respErr;
      }
      if (respInfo.statusCode == 200) {
        console.log(respBody);
      } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
      }
    },
  );
});
