import React from 'react';
import { history, connect } from 'umi';
import { Form, Modal, Input } from 'antd';
import styles from './index.less';
import { getContants } from '@/utils/constant';
import { isEmpty } from '@/utils/utils';

type T = {
  show: boolean;
  onClose: Function;
};

function Component(props: T) {
  const { show, onClose } = props;
  return (
    <>
      <Modal
        title="请登录"
        visible={show}
        onCancel={() => onClose()}
        maskClosable={true}
      >
        <Form
          onFinish={(data: any) => {
            console.log('onFinish:', data);
          }}
        >
          <Form.Item
            name={['user', 'name']}
            label="用户名"
            rules={[{ required: true }]}
          >
            <Input name="username" type="text" />
          </Form.Item>
          <Form.Item
            name={['user', 'name']}
            label="密码"
            rules={[{ required: true }]}
          >
            <Input name="password" type="password" />
          </Form.Item>
          <Form.Item name={['user', 'name']} label="Name" rules={[{}]}>
            <Input name="remember" type="checkbox" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Component;
