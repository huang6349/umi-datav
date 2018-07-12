import React from 'react';
import { connect } from 'dva';

import { DataVLayout } from '../../components';

function GridPage({ grid }) {
  const { layouts } = grid;
  return <DataVLayout layouts={layouts} isDesign={true} />;
}

export default connect(function (state) {
  return {
    grid: state['grid'],
  };
})(GridPage);
