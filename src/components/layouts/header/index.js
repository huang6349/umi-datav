import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'antd';

import Menu from '../menu';

import styles from './styles.css';

export const TitleProps = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

class HeaderView extends Component {

  // constructor(props) {
  //   super(props);

  //   this._menus = [
  //     {
  //       route: '/',
  //       name: '首页模型',
  //     },
  //   ];
  // }

  static propTypes = {
    ...TitleProps,
  }

  render() {
    const {
      pathname,
      title,
    } = this.props;

    return (
      <Row type="flex" justify="space-between">
        <Col span={12}>
          <div className={styles['logo']}>{title}</div>
          <Menu
            className={styles['menu']}
            theme="dark"
            mode="horizontal"
            pathname={pathname}
            menus={[]}>
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default HeaderView;
