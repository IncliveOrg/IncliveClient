import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import { authReducer } from '../app/auth'

const rootReducer = combineReducers({
    'auth': authReducer
})

const store = createStore(
    rootReducer
)

export default store