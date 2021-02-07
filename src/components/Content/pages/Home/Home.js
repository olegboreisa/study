import React from 'react'
import {Button} from "@material-ui/core";
import classes from './Home.module.css'
import {Field, Form, Formik} from "formik";
import {register} from "../../../../api/UserApi";
import {useHistory} from "react-router";

export default () => {
    const history = useHistory()

    const signUp = (formValues, formikHelpers) => {
        formikHelpers.setSubmitting(true)
        register(formValues)
            .then(() => history.push('/login'))
            .finally(() => formikHelpers.setSubmitting(false))
    }

    return (
        <Formik
            initialValues={{
                category: {
                    id: ''
                },
                title: '',
                text: ''
            }}
            onSubmit={signUp}>
            <div className={classes.container}>
                <div className="container center_div col-lg-6">
                    <Form id="align-form">

                        <h2 className="text-center">Write article</h2>

                        <div className="form-group text-center">
                            <label htmlFor="category">Select Category</label>
                            <select className="form-control" id="category" name="category.id">
                                <option value=""></option>
                                <option value="1">Biology</option>
                                <option value="2">Chemistry</option>
                                <option value="3">Art</option>
                                <option value="4">Music</option>
                                <option value="5">Mathematics</option>
                            </select>
                        </div>

                        <div className="form-group text-center">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="name" id="title" className="form-control"/>
                        </div>

                        <div className="form-group text-center">
                            <label htmlFor="text">Text</label>
                            <textarea name="text" id="text"
                                      cols="30" rows="8"
                                      className="form-control">

                    </textarea>
                        </div>

                        <div className="form-group text-center">
                            <Button type="button" color="primary" variant="contained">Post</Button>
                        </div>

                    </Form>
                </div>
            </div>
        </Formik>


        )
}
