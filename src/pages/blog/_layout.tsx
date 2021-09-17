import React from 'react';
import { history, connect } from 'umi';
import { Button, Modal, message } from 'antd';
import styles from './index.less';
import { getContants } from '@/utils/constant';
import LoginModal from '@/components/LoginModal';
import { isEmpty } from '@/utils/utils';
import Cookies from 'js-cookie';

function Page(props: any) {
  console.log('props:', props);

  const { dispatch } = props;

  React.useEffect(() => {
    const token = Cookies.get('token');
    if (!!token) {
      dispatch({ type: 'user/doGetUser' });
    }
  }, []);

  return <>{props.children}</>;
}

const mapStateToProps = (state: any) => ({
  ...state,
});

export default connect(mapStateToProps)(Page);
