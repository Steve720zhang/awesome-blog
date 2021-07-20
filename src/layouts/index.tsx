import React from 'react';
import Cookies from 'js-cookie';
import { connect } from 'umi';

function Layout(props: any) {
  React.useEffect(() => {
    console.log('props:', props);
    const { user, dispatch } = props;
    if (!user.id) {
      if (Cookies.get('token') && Cookies.get('tokenHead')) {
        dispatch({
          type: 'user/doLogin',
        });
      }
    }
  }, []);
  return <div className="block bbbbb">{props.children}</div>;
}

const mapStateToProps = ({ user }: { user: any }) => ({
  ...user,
});

export default connect(mapStateToProps)(Layout);
