import React from 'react'
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default () => {

    const Biology = {
        id: '1',
        categoryName: 'Biology'
    }

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
                    id: '',
                },
            }}
            onSubmit={handleOnSubmit}>
            {(props) => (
                <>
                    <div> Please enter the the following: </div>
                    <Form>
                        <Field as="select" type="text" name="categoryName">
                            <option value={Biology}>Biology</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Art">Art</option>
                        </Field>

                        <Field as="textarea" type="text" name="title" placeholder="Article Title"/>

                        <Field as="textarea" type="text" name="text" placeholder="Article Body"/>
                        <button type="submit">Submit</button>
                    </Form>
                </>
            )}
        </Formik>
    )
}
