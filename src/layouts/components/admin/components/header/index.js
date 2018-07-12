import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'antd';

class HeaderView extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    const { title } = this.props;
    return (
      <Row type="flex" justify="space-between">
        <Col span={24}>{title}</Col>
      </Row>
    );
  }
}

export default HeaderView;
