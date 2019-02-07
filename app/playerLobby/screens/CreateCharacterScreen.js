import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, TextInput, Picker, Button } from 'react-native'
import StyledText from '../../common/components/StyledText'

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
                    <StyledText>Введите имя персонажа:</StyledText>
                    <StyledTextInput
                        value={this.state.name}
                        onChangeStyledText={newValue => this.setState({name: newValue})}/>
                </View>
                <View>
                    <StyledText>Выберите пол персонажа:</StyledText>
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