import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, Button, ScrollView, StyleSheet, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import Loader from '../../common/components/Loader'
import StyledText from '../../common/components/StyledText'

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidUpdate() {
        if (this.props.isLoggedIn) {
            this.props.onLoggedIn()
        }
    }

    render() {
        return (
            <KeyboardAvoidingView>
                <Loader loading={this.props.isLoading}/>
                <StyledText>Email:</StyledText>
                <TextInput
                    value={this.state.email}
                    onChangeStyledText={newValue => this.setState({email: newValue})}/>
                <StyledText>Пароль:</StyledText>
                <TextInput
                    secureStyledTextEntry
                    value={this.state.password}
                    onChangeStyledText={newValue => this.setState({password: newValue})}/>
                <Button
                    title='Вход'
                    onPress={() => this.props.loginAttempt(this.state.email, this.state.password)}/>
                <StyledText>{this.props.error + ''}</StyledText>
                <StyledText>
                    Нет аккаунта?
                    <StyledText
                        style={{fontWeight: 'bold'}}
                        onPress={this.props.navigateToRegister}>
                        Регистрация
                    </StyledText>
                </StyledText>
            </KeyboardAvoidingView>
        )
    }
}

LoginScreen.propTypes = {
    loginAttempt: PropTypes.func,
    error: PropTypes.string,
    onLoggedIn: PropTypes.func,
    navigateToRegister: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    isLoading: PropTypes.bool
}

export default LoginScreen