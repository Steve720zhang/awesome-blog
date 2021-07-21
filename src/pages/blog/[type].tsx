import React from 'react';
import { history } from 'umi';
import { Button } from 'antd';
import styles from './index.less';
import { getContants } from '@/utils/constant';

export default function Page(props: any) {
  const type = props.match.params;
  React.useEffect(() => {
    console.log('props.match.params:', props.match.params);
  });
  return (
    <div className="">
      <div className="bg-white w-full h-12 border-b border-solid border-gray-gray3 shadow-md flex flex-row items-center px-4">
        <div>{getContants('username')}</div>
        <div className="flex-1 flex justify-end flex-row">
          <Button
            onClick={() => history.push('/writing/new')}
            className="ml-2 border-dark-2"
            type="default"
            size="small"
          >
            写一写
          </Button>
          <Button
            onClick={() => history.push('/writing/draft')}
            className="ml-2 border-dark-2"
            type="default"
            size="small"
          >
            草稿箱
          </Button>
        </div>
      </div>
      <div className="max-w-md w-full h-auto m-auto mt-12 flex flex-row px-4 justify-start">
        <div className="flex-2 bg-white h-auto shadow-md flex-shrink-0 flex-none mr-6 md:flex hidden flex-col px-4 py-3">
          <div>
            <p>标签</p>
          </div>
          <div>
            <p>分组</p>
          </div>
          <div>
            <a
              className="text-dark-2 select-none text-center w-full block"
              href="https://beian.miit.gov.cn"
              target="_blank"
            >
              {getContants('ICP')}
            </a>
          </div>
        </div>
        <div className="flex-5 bg-white h-auto shadow-md flex-shrink-0 flex-none flex flex-col"></div>
      </div>
    </div>
  );
}
