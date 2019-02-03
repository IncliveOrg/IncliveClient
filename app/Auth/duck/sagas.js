import { put, takeLatest, all, call } from 'redux-saga/effects'
import actionCreators from './actions'
import api from '../api'

function* login(action) {
    try {
        const data = yield call(api.login, action.payload.email, action.payload.password)
        yield put(actionCreators.login.success(data))
    } catch (error) {
        yield put(actionCreators.login.failure(error))
    }
}

function* register(action) {
    try {
        yield call(api.register, action.payload.email, action.payload.password)
        yield put(actionCreators.register.success())
    } catch (error) {
        yield put(actionCreators.register.failure(error))
    }
}

function* logout() {
    yield call(api.logout)
}

function* loginWatcher() {
    yield takeLatest(actionCreators.login.request, login)
}

function* registerWatcher() {
    yield takeLatest(actionCreators.register.request, register)
}

function* logoutWatcher() {
    yield takeLatest(actionCreators.logout, logout)
}

export default function* rootSaga() {
    yield all([
        loginWatcher(),
        registerWatcher()
    ])
}