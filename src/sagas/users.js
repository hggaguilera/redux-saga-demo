import {
  call,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
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
  } catch (error) {
    yield put(
      actions.usersError({
        error: "An error ocurred while trying to get the users",
      })
    );
  }
}

function* createUser(action) {
  try {
    yield call(api.createUser, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    });
    yield call(api.getUsers);
  } catch (error) {
    yield put(
      actions.usersError({
        error: "An error ocurred while trying to create the user",
      })
    );
  }
}

function* deleteUser({ userId }) {
  try {
    yield call(api.deleteUser, userId);
    yield call(api.getUsers);
  } catch (error) {
    yield put(
      actions.usersError({
        error: "An error ocurred while trying to delete the user",
      })
    );
  }
}

function* watchGetUserRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUser);
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    yield call(deleteUser, { userId: action.payload.userId });
  }
}

const usersSagas = [
  fork(watchGetUserRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];

export default usersSagas;
