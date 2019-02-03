import { createSelector } from 'reselect'


const charactersSelector = state => state.lobby.characters
const charactersLoadingSelector = state => state.lobby.charactersLoading
const characterCreateLoadingSelector = state => state.lobby.characterCreateLoading

export default {
    charactersSelector,
    charactersLoadingSelector,
    characterCreateLoadingSelector
}