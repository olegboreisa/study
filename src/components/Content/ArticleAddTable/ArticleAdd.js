import React from 'react'
import axios from "axios";
import {Field, Form, Formik} from "formik";

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
                categoryName: '',
                title: '',
                text: ''
            }}
            onSubmit={handleOnSubmit}>
            {(props) => (
                <>
                    <div> Please enter the the following: </div>
                    <Form>
                        <Field as="select" name="categoryName">
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </Field>

                        <Field name="lastName" placeholder="Doe"/>
                        <button type="submit">Submit</button>
                    </Form>
                </>
            )}
        </Formik>
    )
}
