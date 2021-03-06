import { connect } from 'react-redux'
import LoginScreen from '../screens/LoginScreen'
import { authSelectors, authActions } from '../'

const mapStateToProps = (state) => ({
    error: authSelectors.lastErrorSelector(state),
    isLoggedIn: authSelectors.isLoggedInSelector(state),
    isLoading: authSelectors.isLoadingSelector(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    loginAttempt: (username, password) => dispatch(authActions.login.request(username, password)),
    navigateToRegister: () => {
        ownProps.navigation.navigate('register')
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen)
