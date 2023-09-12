import * as types from '../actions/types';

export interface AppStateIF {}

const initialState: AppStateIF = {};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.INIT_APP:
    default:
      return state;
  }
};

export default reducer;
