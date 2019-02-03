import React from 'react'
import PropTypes from 'prop-types'
import { View, Button, FlatList, TouchableOpacity } from 'react-native'
import LobbyCharacterList from '../components/LobbyCharacterList';

class PlayerLobbyScreen extends React.Component {
    constructor(props) {
        super(props)
        this.renderCharacterListItem = this.renderCharacterListItem.bind(this)
    }

    componentDidMount() {
        this.props.fetchPlayerCharacters()
    }

    renderCharacterListItem(item) {
        return (
            <TouchableOpacity
                onPress={this.props.onCharacterChosen(item.id)}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                <Loader loading={this.props.сharactersLoading}/>
                <Button
                    onPress={this.props.navigateToCreateCharacter}
                    title="Создать нового персонажа"/>
                <FlatList
                    data={this.props.characters}
                    keyExtractor={(item) => item.id}
                    renderItem={this.renderCharacterListItem}/>
            </View>
        )
    }
}

PlayerLobbyScreen.propTypes = {
    fetchPlayerCharacters: PropTypes.func,
    onCharacterChosen: PropTypes.func,
    сharactersLoading: PropTypes.bool,
    characters: PropTypes.array
}

export default PlayerLobbyScreen