import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegisterScreen from '../screens/LoginScreen'

const mapStateToProps = (state) => ({
    error: authSelectors.lastErrorSelector(state),
    isLoggedIn: authSelectors.isLoggedInSelector(state),
    isLoading: authSelectors.isLoadingSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    registerAttempt: (username, password) => dispatch(authActions.register.request(username, password))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterScreen)
