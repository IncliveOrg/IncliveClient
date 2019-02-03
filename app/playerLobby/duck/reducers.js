import { handleActions } from 'redux-actions'
import actionCreators from './actions'


const initialState = {
    charactersLoading: false,
    characters: [],
    characterCreateLoading: false,
    lastCreatedCharacterId: null
}

const reducer = handleActions(
    new Map([
        [
            actionCreators.characters.fetch,
            (state, action) => ({
                ...state,
                charactersLoading: true,
                characters: []
            })
        ],
        [
            actionCreators.characters.fetchSuccess,
            (state, action) => ({
                ...state,
                charactersLoading: false,
                characters: action.payload.characters
            })
        ],
        [
            actionCreators.newCharacter.create,
            (state, action) => ({
                ...state,
                characterCreateLoading: true,
                lastCreatedCharacterId: null
            })
        ],
        [
            actionCreators.newCharacter.createSuccess,
            (state, action) => ({
                ...state,
                characterCreateLoading: false,
                lastCreatedCharacterId: action.payload.characterId
            })
        ]
    ]),
    initialState
)

export default reducer