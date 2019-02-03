import api from '../../common/api'

const login = async (email, password) => {
    const url = 'auth/login'
    let payload = { email, password }
    return await api.post(url, payload, false)
}

const register = async (email, password) => {
    const url = 'auth/register'
    let payload = { email, password }
    return await api.post(url, payload, false)
}

const saveToken = async(token) => {
    await api.saveToken(token)
}

export default { login, register }