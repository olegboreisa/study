import React from 'react'
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default () => {


    const handleOnSubmit = (formValues) => {
        axios.post("/api/articles/add", formValues)
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
                title: '',
                text: '',
                category: {
                    id: 1
                }
            }}
            onSubmit={handleOnSubmit}>
            {(props) => (
                <>

                    <Form>
                        <div> Please enter the the following: </div>

                        <div>
                            <label htmlFor="title">Title:</label>
                            <Field as="textarea" type="text" name="title" placeholder="Article Title"/>
                        </div>

                        <div>
                            <label htmlFor="text">Body:</label>
                            <Field as="textarea" type="text" name="text" placeholder="Article Body"/>
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                </>
            )}
        </Formik>
    )
}
