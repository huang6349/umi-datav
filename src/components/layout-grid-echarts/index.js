import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash';

import DataVLayout from '../layout-grid-responsive';
import DataVEcharts from '../layout-echarts';

class LayoutView extends Component {
  static propTypes = {
    layouts: PropTypes.arrayOf(PropTypes.shape({
      /** 元素布局位置 */
      position: PropTypes.shape({
        /** 元素宽度 */
        w: PropTypes.number.isRequired,
        /** 元素高度 */
        h: PropTypes.number.isRequired,
        /** 元素X坐标 */
        x: PropTypes.number.isRequired,
        /** 元素Y坐标 */
        y: PropTypes.number.isRequired,
        /** 元素标识 */
        i: PropTypes.string.isRequired,
      }).isRequired,
      /** Echarts的初始化数据 */
      echarts: PropTypes.object.isRequired,
    })),
    /** 是否为设计模式[只有在设计模式下，元素才可以进行拖拽] */
    isDesign: PropTypes.bool,
    /** 可视化图形的元素位置发生变化的回调函数 */
    onLayoutChange: PropTypes.func,
  };

  static defaultProps = {
    layouts: [],
    isDesign: false,
  }

  render() {
    const { layouts } = this.props;

    return (
      <DataVLayout {...this.props} layouts={map(layouts, (item) => {
        item.dom = <DataVEcharts option={item['echarts']} />;
        return item;
      })} />
    );
  }
}

export default LayoutView;
