import React from 'react';
import clx from 'classnames';
import styles from './index.css';

function Page() {
  return (
    <div
      className={clx(
        'w-full-width overflow-hidden h-full-height relative',
        styles.heroImage,
      )}
    >
      <div
        className={clx(
          styles.bottomBg,
          'flex items-end justify-center pb-2 absolute inset-x-0 bottom-0 w-full h-12',
        )}
      >
        <a
          className="text-gray-gray2"
          href="https://beian.miit.gov.cn"
          target="_blank"
        >
          豫ICP备20011799号-1
        </a>
      </div>
      <div className="w-0 h-0 absolute top-1/2 left-1/2 bottom-0">
        <div className="w-auto h-auto border border-solid border-gray-gray5 rounded-1 -ml-1/2 mt-full ">
          <div className="text-gray-gray2 opacity-1/2">小名叫棒棒</div>
        </div>
      </div>
    </div>
  );
}
Page.title = '家庭记录分享';

export default Page;
