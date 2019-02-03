import { AsyncStorage } from 'react-native'

const apiEndpoint = "http://192.168.1.249:45455/api/"

const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem('token', token)
    } catch (error) {
        // error
    }
}

const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('token')
        if (value !== null) {
            return value
        }
    } catch (error) {
        // error
    }
}

const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('token')
    } catch (error) {
        // error
    }
}

function status(response) {  
    if (response.status == 200) {  
        return Promise.resolve(response)  
    } else {  
        return response.json().then(data => {
            return Promise.reject(new Error(data['message'])) 
        }) 
    }  
 }
  
function json(response) {  
    return response.json()  
}

const apiCall = async (url, method, payload, withToken) => {
    const fullUrl = apiEndpoint + url
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    if (withToken) {
        let token = getToken()
        headers['Authorization'] = 'Bearer ' + token
    }
    console.log({
        fullUrl,
        method,
        headers,
        payload
    })
    const result = fetch(fullUrl, {
        method: method,
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(status)
    .then(json)
    .catch(function (error) {
        throw error
    })
    return result
}

const post = async (url, payload, withToken = true) => {
    return await apiCall(url, 'post', payload, withToken)
}

const get = async (url, payload, withToken = true) => {
    return await apiCall(url, 'get', payload, withToken)
}

export default {
    get,
    post,
    saveToken, 
    removeToken
}