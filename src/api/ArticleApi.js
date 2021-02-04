import HTTP from './Main'

export const getArticles = () => HTTP.get(`/articles`)

// export const getArticle = (id) => HTTP.get()
//
// export const addArticle = () => HTTP.post()
//
// export const updateArticle = () => HTTP.put