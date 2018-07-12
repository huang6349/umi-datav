import React, { Component } from 'react';
import {
  Layout,
} from 'antd';
import Scrollbars from 'react-custom-scrollbars';
import router from 'umi/router';

import {
  Header,
  Menu,
} from './components';

import styles from './styles.css';

class AdminLayout extends Component {
  constructor(props) {
    super(props);

    this._title = '数据可视化平台';
    this._v = '1.0.0 bata1';
    this._menus = [
      {
        route: '/',
        icon: 'home',
        name: '首页模型',
      },
      {
        route: '/grid',
        icon: 'profile',
        name: '布局模型',
      },
    ];
  }
  _handleMenuClick({ key }) {
    router.push(key);
  }
  render() {
    this._handleMenuClick = this._handleMenuClick.bind(this);
    const {
      location,
      children,
    } = this.props;
    return (
      <Layout className={styles['layout']}>
        <Layout.Header className={styles['header']}>
          <Header title={this._title} />
        </Layout.Header>
        <Layout>
          <Layout.Sider width={240}>
            <Menu
              pathname={location['pathname']}
              menus={this._menus}
              onClick={this._handleMenuClick}>
            </Menu>
          </Layout.Sider>
          <Layout>
            <Layout.Content className={styles['content']}>
              <Scrollbars>{children}</Scrollbars>
            </Layout.Content>
            <Layout.Footer className={styles['footer']}>
              <div className={styles['v']}>v{this._v}</div>
            </Layout.Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default AdminLayout;
