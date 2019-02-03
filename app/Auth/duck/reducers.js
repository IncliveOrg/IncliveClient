import { handleActions, combineActions } from 'redux-actions'
import actionCreators from './actions'


const initialState = {
    error: '',
    isLoggedIn: false,
    isLoading: false
}

const reducer = handleActions(
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
                error: action.payload.message
            })
        ]
    ]),
    initialState
)

export default reducer