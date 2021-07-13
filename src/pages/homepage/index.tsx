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
          className="text-white"
          href="https://beian.miit.gov.cn"
          target="_blank"
        >
          豫ICP备20011799号-1
        </a>
      </div>
    </div>
  );
}
Page.title = '家庭记录分享';

export default Page;
