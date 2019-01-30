import { createSelector } from 'reselect'


const lastErrorSelector = state => state.auth.error
const isLoggedInSelector = state => state.auth.isLoggedIn
const isLoadingSelector = state => state.auth.isLoading

export default {
    lastErrorSelector,
    isLoggedInSelector,
    isLoadingSelector
}