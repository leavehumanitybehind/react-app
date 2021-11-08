import { call, all } from 'redux-saga/effects'
const sagasList = [
  //chatSaga,
  //quizManagerUserSaga,
  //localStorageManagerSaga,
  //firebaseAuthSagaWatcher,
];
export default function* watchRootSaga() {
  yield all(sagasList.map((saga) => call(saga)));
}
