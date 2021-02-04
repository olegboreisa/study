import HTTP from './main'

export const getLogin = (userData) => HTTP.post('/login')