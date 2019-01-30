import { createActions } from 'redux-actions'

export const actionCreators = createActions({
    LOGIN: {
        REQUEST: (email, password) => ({email, password}),
        SUCCESS: undefined,
        FAILURE: undefined
    },
    REGISTER: {
        REQUEST: (email, password) => ({email, password}),
        SUCCESS: undefined,
        FAILURE: undefined
    }
})