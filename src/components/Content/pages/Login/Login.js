import React from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import { getLogin } from '../../../../api/UserApi'
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {setUserData, setJwt} from "../../../../store/Slices/UserSlice";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Required Field!')
        .min(4, 'Required Field!')
        .max(9, 'Required Field!'),
    password: Yup.string()
        .required('Required Field!')
        .min(4, 'Required Field!')
        .max(9, 'Required Field!'),
})

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
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}>
        {(props) => (
            <Form>
                <div>
                    <label htmlFor="username">Username</label>
                    <Field name="username" id="username" placeholder="Please enter your username" />
                    <ErrorMessage name="username" component="small" className="form-text text-danger"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" id="password" type="password" placeholder="Please enter your password" />
                    <ErrorMessage name="password" component="small" className="form-text text-danger"/>
                </div>

                <button type="submit" disabled={props.isSubmitting}>Login</button>
            </Form>
        )}
    </Formik>
)}

