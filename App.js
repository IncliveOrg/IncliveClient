import React from 'react'
import Provider from 'react-redux'

import store from './store/configureStore'

import { createSwitchNavigator } from 'react-navigation'
import LoginContainer from './app/Auth/containers/LoginContainer';
import RegisterContainer from './app/Auth/containers/RegisterContainer';

const AuthSwitch = createSwitchNavigator({
    'login': LoginContainer,
    'register': RegisterContainer
})

const LobbySwitch = createSwitchNavigator({

})

const GameSwitch = createSwitchNavigator({
    
})

const Router = createSwitchNavigator(
    {
        'auth': AuthSwitch,
        'lobby': LobbySwitch,
        'game': GameSwitch
    }
)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }
}