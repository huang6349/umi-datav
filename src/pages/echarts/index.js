import React from 'react';
import { connect } from 'dva';

import { DataVLayoutEcharts } from '../../components';

function EchartsPage({ echarts }) {

  const { layouts } = echarts;

  return (
    <DataVLayoutEcharts layouts={layouts} isDesign={true} />
  );
}

export default connect(function (state) {
  return {
    echarts: state['echarts'],
  };
})(EchartsPage);
