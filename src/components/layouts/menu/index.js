import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Icon,
} from 'antd';

import { map } from 'lodash';

export const MenuTypes = PropTypes.shape({
  route: PropTypes.string.isRequired,
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
});

export const MenuProps = {
  pathname: PropTypes.string.isRequired,
  menus: PropTypes.arrayOf(MenuTypes),
};

class MenuView extends Component {

  static propTypes = {
    ...MenuProps,
  }

  static defaultProps = {
    menus: [],
  }

  _generator() {
    const { menus } = this.props;
    return map(menus, function (item) {
      return (
        <Menu.Item key={item['route']}>
          {item['icon'] ? <Icon type={item['icon']} /> : <div />}{item['name']}
        </Menu.Item>
      );
    });
  }

  render() {
    this._generator = this._generator.bind(this);

    const { pathname } = this.props;

    return (
      <Menu
        {...this.props}
        selectedKeys={[pathname]}>
        {this._generator()}
      </Menu>
    );
  }
}

export default MenuView;
