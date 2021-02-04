import React from 'react'
import {Field, Form, Formik} from 'formik'
import { getLogin } from '../../../../api/UserApi'
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {setUserData, setJwt} from "../../../../store/Slices/UserSlice";

export default () => {

    const history = useHistory() // [React Hook - History -> is an Object that has some URL Navigation Options]

    const dispatch = useDispatch() // [Dispatch Actions and Data]

    const postLogin = (formValues, formikHelpers) => {
        formikHelpers.setSubmitting(true)

        getLogin(formValues)
            .then(({data, headers: {authorization}}) => {
                dispatch(setUserData(data)) // [ {type: 'user/setUserData', payload: data}
                dispatch(setJwt(authorization))

                history.push('/home')
                }
            )
            .finally(
                () => formikHelpers.setSubmitting(false)
            )
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

