import React, { Component } from 'react';
import {
  Layout,
} from 'antd';
import { connect } from 'dva';
import Scrollbars from 'react-custom-scrollbars';
import router from 'umi/router';

import {
  Header,
  Version,
} from '../../../components';
import {
  Menu,
} from './components';

import styles from './styles.css';

class LayoutView extends Component {

  constructor(props) {
    super(props);

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
      {
        route: '/echarts',
        icon: 'profile',
        name: 'Echarts模型',
      },
      {
        route: '/design/1',
        icon: 'form',
        name: '设计器模型',
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
      global,
    } = this.props;
    const { title, v } = global;

    return (
      <Layout className={styles['layout']}>
        <Layout.Header className={styles['header']}>
          <Header pathname={location['pathname']} title={title} />
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
              <Version v={v} />
            </Layout.Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect(function (state) {
  return { global: state['global'] };
})(LayoutView);
