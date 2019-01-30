import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import store from './store/configureStore'

import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginContainer from './app/auth/containers/LoginContainer';
import RegisterContainer from './app/auth/containers/RegisterContainer';

const AuthSwitch = createSwitchNavigator({
    'login': LoginContainer,
    'register': RegisterContainer
})

/*const LobbySwitch = createSwitchNavigator({

})

const GameSwitch = createSwitchNavigator({
    
})*/

const Router = createSwitchNavigator(
    {
        'auth': AuthSwitch,
        //'lobby': LobbySwitch,
        //'game': GameSwitch
    },
    {
        initialRouteName: 'auth'
    }
)

const AppContainer = createAppContainer(Router)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <StatusBar hidden/>
                <AppContainer/>
            </Provider>
        )
    }
}