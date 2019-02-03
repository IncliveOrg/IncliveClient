import api from '../../common/api'

const fetchCharacters = async () => {
    const url = 'lobby/playerCharacters'
    let payload = {}
    return await api.get(url, payload, true)
}

const logout = async () => {
    await api.removeToken()
}

export default { fetchCharacters, logout }