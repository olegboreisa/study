import React from 'react'
import {Field, Form, Formik} from 'formik'

export default () => {

    const postLogin = (formValues, formikHelpers) => {
        formikHelpers.setSubmitting(true)
        //Post Data
        formikHelpers.setSubmitting(false)
    }

    return (

    <Formik
        initialValues={{
            username: '',
            password: ''
        }}
        onSubmit={postLogin}
    >

        {(props) => (
            <Form>
                <div>
                    <label htmlFor="username">Username</label>
                    <Field name="username" id="username" placeholder="Please enter your username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" id="password" type="password" placeholder="Please enter your password" />
                </div>

                <button type="submit" disabled={props.isSubmitting}>Login</button>
            </Form>
        )}
    </Formik>
)}

