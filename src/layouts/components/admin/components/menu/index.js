import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Icon,
} from 'antd';

import { map } from 'lodash';

import styles from './styles.css';

class MenuView extends Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    menus: PropTypes.arrayOf(PropTypes.shape({
      route: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })),
    onClick: PropTypes.func,
  }
  static defaultProps = {
    menus: [],
  }
  _generator() {
    const { menus } = this.props;
    return map(menus, function (item) {
      return (
        <Menu.Item key={item['route']}>
          <Icon type={item['icon']} />&nbsp;{item['name']}
        </Menu.Item>
      );
    });
  }
  render() {
    this._generator = this._generator.bind(this);
    const {
      pathname,
      onClick,
    } = this.props;
    return (
      <Menu
        className={styles['menu']}
        mode="inline"
        selectedKeys={[pathname]}
        onClick={onClick}>
        {this._generator()}
      </Menu>
    );
  }
}

export default MenuView;
