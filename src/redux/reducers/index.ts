import { combineReducers } from 'redux';
import AppReducer, { AppStateIF } from './AppReducer';
import RandomUserReducer, { RandomUserStateIF } from './RandomUserReducer';
import NavigationReducer from './NavigationReducer';

export interface ReducerStateIF {
  app: AppStateIF;
  randomUser: RandomUserStateIF;
  nav: any;
}

export default combineReducers({
  app: AppReducer,
  randomUser: RandomUserReducer,
  nav: NavigationReducer
});
