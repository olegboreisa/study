import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default () => {

    const [article, setArticle] = useState({})
    let { id } = useParams()

    useEffect( () => {
    axios.get(`/api/articles/${id}`)
        .then(response => {
            setArticle(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const handleOnSubmit = (formValues) => {
        axios.put(`/api/articles/update/${id}`, formValues)
            .then((response) => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Formik
            initialValues={{
                id: article.id,
                title: article.title,
                text: article.text,
                category: {
                    id: 1
                }
            }}
            onSubmit={handleOnSubmit}>
            {(props) => (
                <>
                    <div> Please update the following: </div>
                    <Form>
                        <Field as="textarea" type="text" name="title" placeholder={article.title}/>

                        <Field as="textarea" type="text" name="text" placeholder={article.text}/>
                        <button type="submit">Submit</button>
                    </Form>
                </>
            )}
        </Formik>
    )
}