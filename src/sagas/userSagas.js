import {put,call,takeLatest} from 'redux-saga/effects';
import {getUser, getUserSuccess, getUserError, logoutUser} from '../actions';
import {apiGetUser, apiLogoutUser} from '../lib/api';

//WATCHER SAGA
export function* watchGetUser(){
  yield takeLatest(getUser, workerGetUser);
}

export function* watchLogoutUser(){
  yield takeLatest(logoutUser, workerLogoutUser);
}

//WORKER SAGA

export function* workerGetUser(){
  try{
    const resp = yield call(apiGetUser);
    yield put(getUserSuccess(resp));
  }catch(error){
    yield put(getUserError(error));
  }
}

export function* workerLogoutUser(){
  try {
    const resp = yield call(apiLogoutUser);
  } catch(error){
    console.log(error);
  }
}
