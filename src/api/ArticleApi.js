import HTTP from './Main'

export const getArticles = () => HTTP.get(`/articles`)

export const getArticle = (id) => HTTP.get(`/articles/${id}`)

export const deleteArticle = (id) => HTTP.delete(`/articles/delete/${id}`)
//
// export const addArticle = () => HTTP.post()
//
// export const updateArticle = () => HTTP.put