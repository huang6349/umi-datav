import React from 'react';
import { connect } from 'dva';

import { DataVLayout } from '../../components';

function DesignPage({ design }) {

  const { layouts } = design;

  return (
    <DataVLayout layouts={layouts} isDesign={true} />
  );
}

export default connect(function (state) {
  return {
    design: state['design'],
  };
})(DesignPage);
