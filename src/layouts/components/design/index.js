import React, { Component } from 'react';
import {
  Layout,
} from 'antd';
import { connect } from 'dva';

import {
  Header,
} from '../../../components';

import styles from './styles.css';

class LayoutView extends Component {

  render() {
    const {
      children,
      global,
    } = this.props;
    const { title } = global;

    return (
      <Layout className={styles['layout']}>
        <Layout.Header className={styles['header']}>
          <Header title={title} />
        </Layout.Header>
        <Layout.Content className={styles['content']}>
          {children}
        </Layout.Content>
      </Layout>
    );
  }
}

export default connect(function (state) {
  return { global: state['global'] };
})(LayoutView);
