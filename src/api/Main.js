import axios from "axios"
import store from '../store/Store'

// [HTTP OBJECT THAT ALLOWS US TO DO REQUESTS]
// [HTTP INTERCEPTORS ALLOWS US TO CARRY JWT TOKEN THROUGHOUT

const HTTP = axios.create({
    baseURL: '/api'
})

HTTP.interceptors.request.use(config => {

    config.headers.authorization = store.getState().user.jwt
    return config
})

export { HTTP as default }