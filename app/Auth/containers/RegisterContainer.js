import { connect } from 'react-redux'
import RegisterScreen from '../screens/RegisterScreen'
import { authSelectors, authActions } from '../'

const mapStateToProps = (state) => ({
    error: authSelectors.lastErrorSelector(state),
    isLoggedIn: authSelectors.isLoggedInSelector(state),
    isLoading: authSelectors.isLoadingSelector(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    registerAttempt: (username, password) => dispatch(authActions.register.request(username, password)),
    navigateToLogin: () => {
        ownProps.navigation.navigate('login')
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterScreen)
