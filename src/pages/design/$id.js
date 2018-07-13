import React from 'react';
import { connect } from 'dva';

import { Layout } from './components';

import { DataVLayout } from '../../components';

function DesignPage({ design }) {

  const { layouts } = design;

  return (
    <Layout>
      <DataVLayout layouts={layouts} isDesign={true} />
    </Layout>
  );
}

export default connect(function (state) {
  return {
    design: state['design'],
  };
})(DesignPage);
