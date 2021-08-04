import React from 'react';
import { history, connect } from 'umi';
import { Button, Checkbox, Form, Modal, Input } from 'antd';
import styles from './index.less';
import { getContants } from '@/utils/constant';
import { isEmpty } from '@/utils/utils';

type T = {
  show: boolean;
  onClose: Function;
  dispatch: Function;
};

function Component(props: T) {
  const { show, onClose, dispatch } = props;
  return (
    <>
      <Modal
        title="请登录"
        visible={show}
        onCancel={() => onClose()}
        footer={null}
        maskClosable={true}
      >
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinishFailed={(data: any) => {
            console.log('onFinishFailed:', data);
          }}
          onFinish={(data: any) => {
            dispatch({ type: 'user/doLogin', payload: data });
            console.log('onFinish:', data);
          }}
        >
          <Form.Item
            name={'username'}
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input name="username" type="text" />
          </Form.Item>
          <Form.Item
            name={'password'}
            label="密码"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input name="password" type="password" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 4, span: 16 }}
          >
            <div className="flex flex-row items-center">
              <Checkbox className="mr-4">记住密码</Checkbox>
              <div className="flex-1"></div>
              <Button type="primary" htmlType="submit" className="flex-2">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default connect((state: any) => {
  console.log('state:', state);
  return { user: state.user };
})(Component);
