import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

import SiderMenu from './SiderMenu'

function BasicLayout(props) {




  return (
    <Layout>
      <Sider>
        <SiderMenu />
      </Sider>
    </Layout>
  )
}

export default BasicLayout;