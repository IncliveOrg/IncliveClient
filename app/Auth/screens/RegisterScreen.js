import React, { Component} from 'react'
import { TextInput, View, Button, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import Loader from '../../common/components/Loader'
import StyledText from '../../common/components/StyledText'

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
                    title='Регистрация'
                    onPress={() => this.props.registerAttempt(this.state.email, this.state.password)}/>
                <StyledText>{this.props.error + ''}</StyledText>
                <StyledText>
                    Уже есть аккаунт?
                    <StyledText
                        style={{fontWeight: 'bold'}}
                        onPress={this.props.navigateToLogin}>
                        Вход
                    </StyledText>
                </StyledText>
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