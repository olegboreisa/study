import React, {useState, useEffect} from 'react'
import axios from "axios";


const Content = () => {
    const [articles, setArticles] = useState ()

    const url = ('http://localhost:8080/api/articles')

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setArticles(res.data)
                console.log('Articles', articles)
                console.log('Articles', res.data)
            })
    }, [])

        return (
            articles.map((art) => {
                    return (
                        <div key={art.id}>
                            <h1>{art.title}</h1>
                            <p>{art.text}</p>
                        </div>
                    )
                })
        )

}

export default Content;