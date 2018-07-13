import React, { Component } from 'react';
import {
  Layout,
} from 'antd';
import Scrollbars from 'react-custom-scrollbars';

import Left from '../left';
import Right from '../right';

import styles from './styles.css';

class LayoutView extends Component {
  render() {
    const { children } = this.props;

    return (
      <Layout className={styles['layout']}>
        <Layout.Sider width={240}>
          <Left />
        </Layout.Sider>
        <Layout>
          <Layout>
            <Layout.Content className={styles['content']}>
              <Scrollbars>{children}</Scrollbars>
            </Layout.Content>
            <Layout.Sider width={300}>
              <Right />
            </Layout.Sider>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutView;
