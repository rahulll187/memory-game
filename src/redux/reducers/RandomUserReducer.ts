import { UserIF } from '../../interfaces/User';
import * as types from '../actions/types';

export interface RandomUserStateIF {
  users: UserIF[];
  loader: boolean;
}

const initialState: RandomUserStateIF = {
  users: [],
  loader: false
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_RANDOM_USERS_REQUEST:
      return { ...state, loader: true };
    case types.GET_RANDOM_USERS_SUCCESS:
      return { ...state, ...(action.payload || {}), loader: false };
    case types.GET_RANDOM_USERS_FAIL:
      return { ...state, loader: false };
    default:
      return state;
  }
};

export default reducer;
