import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import { authReducer, authSaga } from '../app/auth'
import { lobbyReducer, lobbySaga } from '../app/playerLobby';

const rootReducer = combineReducers({
    'auth': authReducer,
    'lobby': lobbyReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

function* rootSaga() {
    yield all([
        authSaga(),
        lobbySaga()
    ])
}
sagaMiddleware.run(rootSaga)

export default store