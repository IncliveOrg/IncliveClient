import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TextInput, View, Button, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'

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
                <Text>Email:</Text>
                <TextInput
                    value={this.state.email}
                    onChangeText={newValue => this.setState({email: newValue})}/>
                <Text>Пароль:</Text>
                <TextInput
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={newValue => this.setState({password: newValue})}/>
                <Button
                    title='Вход'
                    onPress={() => this.props.loginAttempt(this.state.email, this.state.password)}/>
                <Text>{this.props.error + ''}</Text>
                <Text>
                    Нет аккаунта?
                    <Text
                        style={{fontWeight: 'bold'}}
                        onPress={() => this.props.navigateToRegister()}>
                        Регистрация
                    </Text>
                </Text>
            </KeyboardAvoidingView>
        )
    }
}

LoginScreen.propTypes = {
    loginAttempt: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    onLoggedIn: PropTypes.func,
    navigateToRegister: PropTypes.func.isRequired
}

export default LoginScreen