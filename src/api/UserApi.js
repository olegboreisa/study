import HTTP from './Main'

export const getLogin = (userData) => HTTP.post('/login', userData)

export const register = (userInfo) => HTTP.post('/signup', userInfo)