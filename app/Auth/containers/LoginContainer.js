import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginScreen from '../screens/LoginScreen'
import { actionCreators } from '../actions'
import { lastErrorSelector, isLoggedInSelector } from '../selectors'

const mapStateToProps = (state) => ({
    error: lastErrorSelector(state),
    isLoggedIn: isLoggedInSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    loginAttempt: (username, password) => dispatch(actionCreators.login.request(username, password))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen)
