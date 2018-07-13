import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SizeMe,
  withSize,
} from 'react-sizeme';
import Layout from 'react-grid-layout';

import { map } from 'lodash';

import styles from './styles.css';

/**
 * 自适应流布局位置 - 类型检测申明
 */
export const PlaceTypes = PropTypes.shape({
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
}).isRequired;

/**
 * 自适应流布局位置
 */
export const PlaceProps = {
  place: PlaceTypes,
};

/**
 * 是否为设计模式 - 类型检测申明
 */
export const IsDesignTypes = PropTypes.bool;

/**
 * 是否为设计模式
 */
export const IsDesignProps = {
  /** 只有在设计模式下，元素才可以进行拖拽 */
  isDesign: IsDesignTypes,
};

/**
 * 可视化图形的元素位置发生变化的回调函数 - 类型检测申明
 */
export const OnLayoutChangeTypes = PropTypes.func;

/**
 * 可视化图形的元素位置发生变化的回调函数
 */
export const OnLayoutChangeProps = {
  onLayoutChange: OnLayoutChangeTypes,
};

/**
 * 可视化图形的布局数据
 */
const LayoutsProps = PropTypes.shape({
  ...PlaceProps,
  dom: PropTypes.element,
});

/**
 * 自适应流布局
 */
class LayoutView extends Component {

  static propTypes = {
    layouts: PropTypes.arrayOf(LayoutsProps),
    ...IsDesignProps,
    ...OnLayoutChangeProps,
  }

  static defaultProps = {
    layouts: [],
    isDesign: false,
  }

  /**
   * 新增一个布局
   * 
   * @param {Number} length 已存在的布局元素个数
   */
  static increase(length = 0) {
    const i = length, w = 4, h = 2;
    return {
      position: {
        x: Number((i * w) % 12),
        y: Math.floor(i / 6) * h,
        w: Number(w),
        h: Number(h),
        i: i.toString(),
      },
    };
  }

  _generator() {

    const {
      layouts,
      isDesign,
    } = this.props;

    return map(layouts, (item, i) => {

      const {
        place,
        dom,
      } = item;

      function InternalComponent(props) {
        return React.cloneElement(dom || <div />, {
          ...props,
        });
      }

      function renderItem(props) {
        return (
          <div className={styles['layout-grid-item']}>
            <InternalComponent {...props} />
          </div>
        );
      }

      return (
        <section
          className={styles['layout-grid']}
          key={i}
          data-grid={{
            ...place,
            static: !isDesign,
          }}>
          <SizeMe monitorHeight={true} render={renderItem} />
        </section>
      );
    });
  }

  render() {
    this._generator = this._generator.bind(this);

    const {
      size,
      onLayoutChange,
    } = this.props;
    const { width } = size;

    const layoutProps = {
      width: width,
      onLayoutChange: onLayoutChange,
      children: this._generator(),
    };

    return <Layout {...layoutProps} />;
  }
}

export default withSize()(LayoutView);
