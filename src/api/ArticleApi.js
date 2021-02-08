import HTTP from './Main'

export const getArticles = () => HTTP.get(`/articles`)

export const getArticle = (id) => HTTP.get(`/articles/${id}`)

export const deleteArticle = (id) => HTTP.delete(`/articles/delete/${id}`)

export const getArticlesByCategory = (id) => HTTP.get(`/articles/categories/${id}`)

export const addArticle = (articleData) => HTTP.post('/articles/add', articleData)

export const updateArticle = (id, articleData) => HTTP.put(`/articles/update/${id}`, articleData)