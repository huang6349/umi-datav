import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash';

import DataVLayout, {
  PlaceProps,
  IsDesignProps,
  OnLayoutChangeProps,
} from '../layout-grid-responsive';
import DataVEcharts, {
  OptionTypes,
} from '../layout-echarts';

/**
 * 自适应流布局 - Echarts
 */
class LayoutView extends Component {

  /** 可视化图形的布局数据 */
  static propTypes = {
    layouts: PropTypes.arrayOf(PropTypes.shape({
      ...PlaceProps,
      /** Echarts的初始化数据 */
      echarts: OptionTypes,
    })),
    ...IsDesignProps,
    ...OnLayoutChangeProps,
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
