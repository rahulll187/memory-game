import { createStore, applyMiddleware, Action, AnyAction } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk, { ThunkAction } from 'redux-thunk';

import reducers from '../reducers';
import sagas from '../sagas';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(loggerMiddleware, thunk, sagaMiddleware)
);

// run the saga
sagaMiddleware.run(sagas);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Infer the `App State` and `App Dispatch` types from the store itself
export type StateIF = typeof store.getState;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type DispatchIF = typeof store.dispatch;

export type ActionResponse =
  | ThunkAction<void, RootState, unknown, AnyAction>
  | Action<string>
  | any;
