import { connect } from 'react-redux'
import { lobbySelectors, lobbyActions } from '../'
import PlayerLobbyScreen from '../screens/PlayerLobbyScreen'

const mapStateToProps = (state) => ({
    characters: lobbySelectors.charactersSelector(state),
    charactersLoading: lobbySelectors.charactersLoadingSelector(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPlayerCharacters: () => dispatch(lobbyActions.characters.fetch()),
    onCharacterChosen: () => ownProps.navigation.navigate('game')
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerLobbyScreen)
