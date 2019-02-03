import { createActions } from 'redux-actions'

const actionCreators = createActions({
    LOGIN: {
        REQUEST: (email, password) => ({email, password}),
        SUCCESS: (data) => ({playerId: data.playerId, token: data.token}),
        FAILURE: undefined
    },
    REGISTER: {
        REQUEST: (email, password) => ({email, password}),
        SUCCESS: (data) => ({playerId: data.playerId, token: data.token}),
        FAILURE: undefined
    },
    LOGOUT: undefined
})

export default actionCreators