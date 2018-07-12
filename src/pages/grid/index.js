import React from 'react';
import { connect } from 'dva';

import { map } from 'lodash';

import { DataVLayout } from '../../components';
import { Example } from './components';

function GridPage({ grid }) {

  const { layouts } = grid;

  return (
    <DataVLayout layouts={map(layouts, (item, i) => {
      item.dom = <Example message={`元素序号：${i}`} />;
      return item;
    })} isDesign={true} />
  );
}

export default connect(function (state) {
  return {
    grid: state['grid'],
  };
})(GridPage);
