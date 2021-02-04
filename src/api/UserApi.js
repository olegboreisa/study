import HTTP from './Main'

export const getLogin = (userData) => HTTP.post('/login', userData)