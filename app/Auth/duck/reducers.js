import { handleActions, combineActions } from 'redux-actions'
import { actionCreators } from './actions'


const initialState = {
    error: '',
    isLoggedIn: false,
    isLoading: false
}

const authReducer = handleActions(
    new Map([
        [
            combineActions(
                actionCreators.login.request,
                actionCreators.register.request
            ),
            (state, action) => ({
                isLoading: true,
                error: ''
            })
        ],
        [
            combineActions(
                actionCreators.login.success,
                actionCreators.register.success
            ),
            (state, action) => ({
                isLoading: false,
                error: '',
                isLoggedIn: true
            })
        ],
        [
            combineActions(
                actionCreators.login.failure,
                actionCreators.register.failure
            ),
            (state, action) => ({
                isLoading: false,
                error: action.error
            })
        ]
    ]),
    initialState
)

export default authReducer