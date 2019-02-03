import { createActions } from 'redux-actions'

const actionCreators = createActions({
    CHARACTERS: {
        FETCH: undefined,
        FETCH_SUCCESS: undefined
    },
    NEW_CHARACTER: {
        CREATE: undefined,
        CREATE_SUCCESS: undefined
    }
})

export default actionCreators