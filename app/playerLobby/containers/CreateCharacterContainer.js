import { connect } from 'react-redux'
import { lobbySelectors, lobbyActions } from '../'
import CreateCharacterScreen from '../screens/CreateCharacterScreen';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    createCharacter: (data) => dispatch(lobbyActions.newCharacter.create(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateCharacterScreen)
