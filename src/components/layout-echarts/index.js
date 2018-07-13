import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Echarts from 'echarts-for-react';

/**
 * Echarts的数据对象 - 类型检测申明
 */
export const OptionTypes = PropTypes.object;

/**
 * Echarts的数据对象
 */
export const OptionProps = {
  option: OptionTypes,
};

/**
 * Echarts的布局尺寸 - 类型检测申明
 */
export const SizeTypes = PropTypes.shape({
  /** 布局高度 */
  height: PropTypes.number,
  /** 布局宽度 */
  width: PropTypes.number,
});

/**
 * Echarts的布局尺寸
 */
export const SizeProps = {
  size: SizeTypes,
};

/**
 * Echarts的包装容器
 */
class EchartsView extends Component {

  static propTypes = {
    ...OptionProps,
    ...SizeProps,
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
