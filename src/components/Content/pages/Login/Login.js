import React from 'react'
import {Field, Form, Formik} from 'formik'

export default () => (
    <Formik>
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

                <button type="submit">Login</button>
            </Form>
        )}
    </Formik>
)

