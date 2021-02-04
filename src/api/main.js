import axios from "axios"

// [HTTP OBJECT THAT ALLOWS US TO DO REQUESTS]

const HTTP = axios.create({
    baseURL: '/api'
})

export { HTTP as default }