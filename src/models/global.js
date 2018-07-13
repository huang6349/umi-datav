export default {
  namespace: 'global',
  state: {
    title: '数据可视化平台',
    v: '1.0.0 bata1',
  },
  subscriptions: {},
  effects: {},
  reducers: {
    update_state: function (state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
};
