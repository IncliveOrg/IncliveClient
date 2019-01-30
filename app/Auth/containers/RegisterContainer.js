import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegisterScreen from '../screens/LoginScreen'
import { actionCreators } from '../actions'
import { lastErrorSelector, isLoggedInSelector } from '../selectors'

const mapStateToProps = (state) => ({
    error: lastErrorSelector(state),
    isLoggedIn: isLoggedInSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    registerAttempt: (username, password) => dispatch(actionCreators.register.request(username, password))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterScreen)
