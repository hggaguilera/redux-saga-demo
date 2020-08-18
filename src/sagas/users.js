import { call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUser() {
  try {
    const res = yield call(api.getUsers);
    yield put(
      actions.getUsersSuccess({
        items: res.data.data,
      })
    );
  } catch (error) {}
}

function* watchGetUserRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUser);
}

const usersSagas = [fork(watchGetUserRequest)];

export default usersSagas;
