export default {
  namespace: 'grid',
  state: {
    layouts: [
      {
        position: {
          w: 8,
          h: 4,
          x: 0,
          y: 0,
          i: "0",
        },
      },
      {
        position: {
          w: 4,
          h: 2,
          x: 8,
          y: 0,
          i: "1",
        },
      },
      {
        position: {
          w: 4,
          h: 2,
          x: 8,
          y: 4,
          i: "2",
        },
      },
      {
        position: {
          w: 4,
          h: 2,
          x: 0,
          y: 4,
          i: "3",
        },
      },
      {
        position: {
          w: 4,
          h: 2,
          x: 4,
          y: 4,
          i: "4",
        },
      },
      {
        position: {
          w: 4,
          h: 2,
          x: 8,
          y: 2,
          i: "5",
        },
      },
    ],
  },
  subscriptions: {},
  effects: {},
  reducers: {
    update_state: function (state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
};
