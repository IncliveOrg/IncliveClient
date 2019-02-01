import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import { authReducer, authSaga } from '../app/auth'
import createSagaMiddleware from 'redux-saga';

const rootReducer = combineReducers({
    'auth': authReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

function* rootSaga() {
    yield all([
        authSaga
    ])
}
sagaMiddleware.run(rootSaga)


export default store