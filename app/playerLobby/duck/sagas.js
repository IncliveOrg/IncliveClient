import { put, takeLatest, all, call } from 'redux-saga/effects'
import actionCreators from './actions'
import api from '../api'
import { NavigationActions } from 'react-navigation'

function* charactersFetch(action) {
    try {
        const data = yield call(api.fetchCharacters)
        yield put(actionCreators.characters.fetchSuccess(data))
    } catch (error) {
        //yield put(actionCreators.login.failure(error))
    }
}

function* charactersFetchWatcher() {
    yield takeLatest(actionCreators.characters.fetch, charactersFetch)
}

function* createCharacter(action) {
    try {
        const data = yield call(api.createCharacter, action.payload)
        yield put(actionCreators.newCharacter.createSuccess)
    } catch (error) {
        // error
    }
}

function* createCharacterWatcher() {
    yield takeLatest(actionCreators.newCharacter.create, createCharacter)
}

function* createCharacterSuccess() {
    yield put(NavigationActions.navigate({routeName: 'characters'}))
}

function* createCharacterSuccessWatcher() {
    yield takeLatest(actionCreators.newCharacter.createSuccess, createCharacterSuccess)
}

export default function* rootSaga() {
    yield all([
        charactersFetchWatcher(),
        createCharacterSuccessWatcher()
    ])
}