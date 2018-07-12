import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from 'react-grid-layout';
import SizeMe from 'react-sizeme';

import { map } from 'lodash';

import styles from './styles.css';

class LayoutView extends Component {
  static propTypes = {
    /** 可视化图形的布局数据 */
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
      /** 元素内容 */
      dom: PropTypes.element,
    })),
    /** 是否为设计模式[只有在设计模式下，元素才可以进行拖拽] */
    isDesign: PropTypes.bool,
    /** 可视化图形的元素位置发生变化的回调函数 */
    onLayoutChange: PropTypes.func,
  }
  static defaultProps = {
    layouts: [],
    isDesign: false,
  }
  _generator() {
    const {
      layouts,
      isDesign,
    } = this.props;
    return map(layouts, (item, i) => {
      const {
        position,
        dom,
      } = item;
      return (
        <section
          className={styles['grid']}
          key={i}
          data-grid={{
            ...position,
            static: !isDesign,
          }}>
          {dom || <div />}
        </section>
      );
    });
  }
  render() {
    this._generator = this._generator.bind(this);
    const {
      onLayoutChange,
    } = this.props;
    const { width } = this.props.size;
    const layoutProps = {
      width: width,
      onLayoutChange: onLayoutChange,
      children: this._generator(),
    };
    return <Layout {...layoutProps} />;
  }
}

export default SizeMe()(LayoutView);
