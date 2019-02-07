import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar, ImageBackground } from 'react-native'
import store from './store/configureStore'
import AppContainer from './Navigation'
import styles from './app/common/styles'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <StatusBar hidden/>
                <ImageBackground
                    source={require('./assets/bg.png')}
                    style={styles.MainContainer}>
                    <AppContainer/>
                </ImageBackground>
            </Provider>
        )
    }
}