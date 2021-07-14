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
      <div className="absolute top-3/4 left-0 right-0">
        <div className="border border-solid border-gray-gray5 rounded-1 block max-w-2/3 m-auto w-max px-6 py-2">
          <p className="select-none">
            <span className="text-gray-gray1 text-2xl">小名叫棒棒</span>
            <span className="text-gray-gray3 text-2xl">的写字间</span>
          </p>
        </div>
      </div>
    </div>
  );
}
Page.title = '家庭记录分享';

export default Page;
