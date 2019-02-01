import { put, takeLatest, all, put } from 'redux-saga/effects'
import actionCreators from './actions'

function* login(action) {
    try {
        const data = yield call(api.login, action.payload.email, action.payload.password)
        yield put(actionCreators.login.success(data))
     } catch (error) {
        yield put(actionCreators.login.failure(error))
     }
}

function* loginWatcher() {
    yield takeLatest(actionCreators.login.request, login)
}

export default function* rootSaga() {
    yield all([
        loginWatcher()
    ])
}