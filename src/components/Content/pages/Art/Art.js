import React, {useEffect, useState} from 'react'
import axios from "axios";

export default () => {

    const [articles, setArticles] = useState ([])
    const url = '/art'

    useEffect( () => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setArticles(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            {
                articles.map((article) => (
                    <div>
                        <h5 key={ article.id }>{ article.title }</h5>
                        <p>{ article.text }</p>
                    </div>
                ))
            }
        </div>
    )
}
