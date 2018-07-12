import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExampleView extends Component {

  static propTypes = {
    message: PropTypes.string,
    size: PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
    }).isRequired,
  }

  static defaultProps = {
    message: '无',
    size: {
      height: 0,
      width: 0,
    },
  }

  render() {
    const {
      message,
      size,
    } = this.props;
    const { height, width } = size;

    return (
      <section>
        <span>{`当前DOM：宽度[${width}px], 高度[${height}]`}</span>
        <br />
        <span>{`组件传递消息：${message}`}</span>
      </section>
    );
  }
}

export default ExampleView;
