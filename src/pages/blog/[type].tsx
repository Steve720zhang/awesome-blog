import React from 'react';
import { history, connect } from 'umi';
import { Button, Modal, message } from 'antd';
import styles from './index.less';
import { getContants } from '@/utils/constant';
import LoginModal from '@/components/LoginModal';
import { isEmpty } from '@/utils/utils';

function Page(props: { user: any; match: any }) {
  const { user } = props;
  const type = props.match.params;

  const [showLogin, setShowLogin] = React.useState(false);
  const [lastRequestUrl, setLastRequestUrl] = React.useState<
    string | undefined
  >('');

  // React.useEffect(() => {
  //   console.log('props.match.params:', props.match.params);
  //   console.log('props.match.params:', props);
  //   console.log('props.match.params:', user);
  // });

  const requestToWriting = (param?: string) => {
    console.log('requestToWriting:', param);
    setLastRequestUrl(param);
    if (isEmpty(user)) {
      message.error('请先登录');
      setShowLogin(true);
    } else {
      history.push(`/writing/${param}`);
    }
  };
  return (
    <div className="">
      <div className="bg-white w-full h-12 border-b border-solid border-gray-gray3 shadow-md flex flex-row items-center px-4">
        <div>{getContants('username')}</div>
        <div className="flex-1 flex justify-end flex-row">
          <Button
            onClick={() => requestToWriting('new')}
            className="ml-2 border-dark-2"
            type="default"
            size="small"
          >
            写一写
          </Button>
          <Button
            onClick={() => requestToWriting('draft')}
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
      <LoginModal
        show={showLogin}
        onClose={(goingOn = false) => {
          setShowLogin(false);
          if (goingOn) {
            requestToWriting(lastRequestUrl);
          }
        }}
      />
    </div>
  );
}

const mapStateToProps = ({ user }: { user: any }) => ({
  user,
});
export default connect(mapStateToProps)(Page);
