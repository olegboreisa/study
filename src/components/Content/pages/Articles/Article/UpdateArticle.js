import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from "react-router";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import classes from "./UpdateArticle.module.css";
import {Button} from "@material-ui/core";
import * as Yup from "yup";
import {useTranslation} from "react-i18next";
import {updateArticle} from "../../../../../api/ArticleApi";

export default (props) => {

    const history = useHistory()
    const { t } = useTranslation("article")
    let { id } = useParams()

    const {article} = props.location.aboutProps
    console.log('props', props)
    console.log('article', article)

    const validationSchema = Yup.object().shape({
        category: Yup.object().shape({
            id: Yup.string()
                .required(`${t('userV')}`)
                .min(1, `${t('selectCat')}`)
        }),
        title: Yup.string()
            .required(`${t('userV')}`)
            .min(4, `${t('charMin')}`)
            .max(100, `${t('charMax')}`),
        text: Yup.string()
            .required(`${t('userV')}`)
            .min(100, `${t('charMin2')}`)
            .max(2500, `${t('charMax2')}`)
    })


    const handleOnSubmit = (formValues, formikHelpers) => {
        formikHelpers.setSubmitting(true)
        updateArticle(id, formValues)
            .then((response) => {
                history.push(`/articles/${id}`)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => formikHelpers.setSubmitting(false))
    }

    return (
        <Formik
            initialValues={{
                category: {
                    id: `${article.category.id}`
                },
                title: `${article.title}`,
                text: `${article.text}`
            }}
            onSubmit={handleOnSubmit}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}>
            {(props) => (
                <div className={classes.container}>
                    <div className="container center_div col-lg-6">
                        <Form id="align-form">

                            <h2 className="text-center">{t('update')}</h2>

                            <div className="form-group text-center">
                                <label htmlFor="category">{t('cat')}</label>
                                <Field as="select" className="form-control" id="category" name="category.id">
                                    <option value=""></option>
                                    <option value="1">{t('biology')}</option>
                                    <option value="2">{t('chemistry')}</option>
                                    <option value="3">{t('art')}</option>
                                    <option value="4">{t('music')}</option>
                                    <option value="5">{t('math')}</option>
                                </Field>
                                <ErrorMessage name="category.id" component="small" className="text-red-500 text-xs italic bold text-center text-success"/>
                            </div>

                            <div className="form-group text-center">
                                <label htmlFor="title">{t('title')}</label>
                                <Field type="input" name="title" id="title" className="form-control" />
                                <ErrorMessage name="title" component="small" className="text-red-500 text-xs italic bold text-center text-success"/>
                            </div>

                            <div className="form-group text-center">
                                <label htmlFor="text">{t('text')}</label>
                                <Field component="textarea" name="text" id="text"
                                       rows="6"
                                       className="form-control">
                                </Field>
                                <ErrorMessage name="text" component="small" className="text-red-500 text-xs italic bold text-center text-success"/>
                            </div>

                            <div className="form-group text-center">
                                <Button type="submit" color="primary" variant="contained" disabled={props.isSubmitting}>{t('post')}</Button>
                            </div>

                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )}