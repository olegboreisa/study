import HTTP from './main'

export const getCategories = () => HTTP.get('/categories')

export const deleteCategory = (id) => HTTP.delete(`/categories/delete/${id}`)