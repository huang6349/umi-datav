import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Echarts from 'echarts-for-react';

class EchartsView extends Component {

  static propTypes = {
    option: PropTypes.object,
    size: PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
    }),
  }

  static defaultProps = {
    option: {},
    size: {
      height: 0,
      width: 0,
    },
  }

  render() {
    const {
      option,
      size,
    } = this.props;
    const { height, width } = size;

    return (
      <Echarts style={{ height: height, width: width }} option={option} />
    );
  }
}

export default EchartsView;
