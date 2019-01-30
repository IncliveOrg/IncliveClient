import React, { Component} from 'react'
import { Text, TextInput, View, Button, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import Loader from '../../common/components/loader';

class RegisterScreen extends Component {
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
                    title='Регистрация'
                    onPress={() => this.props.registerAttempt(this.state.email, this.state.password)}/>
                <Text>{this.props.error + ''}</Text>
                <Text>
                    Уже есть аккаунт?
                    <Text
                        style={{fontWeight: 'bold'}}
                        onPress={this.props.navigateToLogin}>
                        Вход
                    </Text>
                </Text>
            </KeyboardAvoidingView>
        )
    }
}

RegisterScreen.propTypes = {
	registerAttempt: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    onLoggedIn: PropTypes.func,
    navigateToLogin: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    isLoading: PropTypes.bool
}

export default RegisterScreen