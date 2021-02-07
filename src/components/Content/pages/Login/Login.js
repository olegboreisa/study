import React from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import { getLogin } from '../../../../api/UserApi'
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {setUserData, setJwt} from "../../../../store/Slices/UserSlice";
import * as Yup from "yup";
import classes from './Login.module.css'
import Button from "@material-ui/core/Button";
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from "react-i18next";
import Alert from "@material-ui/lab/Alert";
import {Link} from "react-router-dom";

export default () => {
    const { t } = useTranslation("signForm")
    const history = useHistory() // [React Hook - History -> is an Object that has some URL Navigation Options]
    let catchLogin = false

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required(`${t('userV')}`)
            .min(4, `${t('charMin')}`)
            .max(9, `${t('charMax')}`),
        password: Yup.string()
            .required(`${t('userV')}`)
            .min(4, `${t('charMin')}`)
            .max(9, `${t('charMax')}`),
    })

    const dispatch = useDispatch() // [Dispatch Actions and Data]

    const postLogin = (formValues, formikHelpers) => {
        formikHelpers.setSubmitting(true)

        getLogin(formValues)
            .then(({data, headers: {authorization}}) => {
                dispatch(setUserData(data)) // [ {type: 'user/setUserData', payload: data}
                dispatch(setJwt(authorization))
                catchLogin = false;
                history.push('/home')
                }
            ).catch( () => {
                catchLogin = true;
        })
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
            <div className={classes.container}>
                <Form className={classes.form}>
                    <FontAwesomeIcon icon={faUserGraduate} size={"4x"} className={classes.icon}/>
                    <h3>{t('signFormik')}</h3>
                    <div className={classes.elem}>
                        <label htmlFor="username" className={classes.label}>{t('username')}</label>
                        <Field name="username" id="username" className={classes.field}/>
                        <ErrorMessage name="username" component="small" className="text-red-500 text-xs italic bold text-center text-warning"/>
                    </div>
                    <div className={classes.elem}>
                        <label htmlFor="password" className={classes.label}>{t('pass')}</label>
                        <Field name="password" id="password" type="password" className={classes.field}/>
                        <ErrorMessage name="password" component="small" className="text-red-500 text-xs italic bold text-center text-warning"/>
                    </div>
                    <div className={classes.elem}>
                        <Button type="submit" disabled={props.isSubmitting} color="primary" variant="contained">{t('login')}</Button>
                    </div>
                    {
                        catchLogin === true ?
                            (<Alert severity="error">{t('error')}</Alert>)
                            :
                            ''
                    }
                        <Alert severity="info" className={classes.link}>
                            <Link to="/signup" >{t('reg')}</Link>
                        </Alert>
                </Form>
            </div>
        )}
    </Formik>
)}

