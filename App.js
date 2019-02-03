import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import store from './store/configureStore'

import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import LoginContainer from './app/auth/containers/LoginContainer'
import RegisterContainer from './app/auth/containers/RegisterContainer'
import PlayerLobbyContainer from './app/playerLobby/containers/PlayerLobbyContainer'
import CreateCharacterContainer from './app/playerLobby/containers/PlayerLobbyContainer'

const AuthStack = createSwitchNavigator(
    {
        'login': LoginContainer,
        'register': RegisterContainer
    },
    {
        headerMode: "none",
        initialRouteKey: 'login'
    }
)

const LobbyStack = createStackNavigator(
    {
        'characters': PlayerLobbyContainer,
        'character-creation': CreateCharacterContainer
    },
    {
        headerMode: 'none',
        initialRouteKey: 'characters'
    }
)

/*const GameSwitch = createSwitchNavigator({
    
})*/

const Router = createSwitchNavigator(
    {
        'auth': AuthStack,
        'lobby': LobbyStack,
        //'game': GameSwitch
    },
    {
        initialRouteName: 'auth',
        headerMode: "none"
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