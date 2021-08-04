import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';


export interface UserModelState {
  name: string;
}

export interface IndexModelType {
  namespace: 'users';
  state: UserModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: any;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const UserModel: IndexModelType = {
  namespace: 'users',

  state: {
    name: '',
  },

  effects: {
    *query({ payload }, { call, put }) {
    },
  },
  reducers: {
    save(state: any, action: any) {
        const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];

      return data;
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }: any) {
      return history.listen(({ pathname }: any) => {
        if (pathname === '/user') {
          dispatch({
            type: 'save',
          });
        }
      });
    },
  },
};

export default UserModel;