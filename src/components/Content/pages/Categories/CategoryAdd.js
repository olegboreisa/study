import React from 'react'
import {Field, Form, Formik} from "formik";
import axios from 'axios'

export default () => {

    const handleOnSubmit = (formValues) => {
        axios.post("/api/add-category", formValues)
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
                category: ''
            }}
            onSubmit={handleOnSubmit}>
            {(props) => (
                <>
                    <Form>
                        <Field type="text" name="category"/>

                        <button type="submit">Submit</button>
                    </Form>
                </>
            )}
        </Formik>
        )
}