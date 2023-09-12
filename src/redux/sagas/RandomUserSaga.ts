import { Alert } from 'react-native';
import { put, call, takeLatest } from 'redux-saga/effects';
import * as RandomUserAction from '../actions/RandomUserAction';
import * as types from '../actions/types';
import { ResponseIF, getUsers } from '../services/RandomUserService';

function* getRandomUsers() {
  try {
    const res: ResponseIF = yield call(getUsers);
    if (res) {
      yield put(RandomUserAction.getUsersSuccess(res.results));
    } else {
      yield put(RandomUserAction.getUsersFail());
    }
  } catch (error: any) {
    if (error?.response?.data?.message) {
      Alert.alert(error?.response?.data?.message);
    } else {
      Alert.alert(error?.message);
    }
    yield put(RandomUserAction.getUsersFail());
  }
}

export default function* sagas() {
  yield takeLatest(types.GET_RANDOM_USERS_REQUEST, getRandomUsers);
}
