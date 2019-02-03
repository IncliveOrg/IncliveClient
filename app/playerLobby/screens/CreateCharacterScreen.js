import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, Text, TextInput, Picker, Button } from 'react-native'

class CreateCharacterScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            sex: ''
        }
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text>Введите имя персонажа:</Text>
                    <TextInput
                        value={this.state.name}
                        onChangeText={newValue => this.setState({name: newValue})}/>
                </View>
                <View>
                    <Text>Выберите пол персонажа:</Text>
                    <Picker
                        selectedValue={this.state.sex}
                        onValueChange={(itemValue, itemIndex) => this.setState({sex: itemValue})}
                        prompt='Выберите пол персонажа'>
                        <Picker.Item label="Мужской" value="male"/>
                        <Picker.Item label="Женский" value="female"/>
                    </Picker>
                </View>
                <Button
                    title='Создать'
                    onPress={() => this.props.createCharacter({
                        name: this.state.name,
                        sex: this.state.sex
                    })}/>
            </ScrollView>
        )
    }
}

CreateCharacterScreen.propTypes = {
    createCharacter: PropTypes.func
}

export default CreateCharacterScreen