import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import authReducer from '../app/auth/duck'

const rootReducer = combineReducers({
    authReducer
})

const store = createStore(
    rootReducer
)

export default store