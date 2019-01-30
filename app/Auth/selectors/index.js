import { createSelector } from 'reselect'

export const lastErrorSelector = state => state.auth.error
export const isLoggedInSelector = state => state.auth.isLoggedIn