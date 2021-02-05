import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Field, Form, Formik} from "formik";
import {useHistory} from "react-router";
import { register } from '../../../../api/UserApi'
import Checkbox from "@material-ui/core/Checkbox";
import PropsState from "../../../../PropsState";



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    Form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
}));

export default () => {
    const history = useHistory()

    const signUp = (formValues, formikHelpers) => {
        formikHelpers.setSubmitting(true)
        register(formValues)
            .then(() => history.push('/home'))
            .finally(() => formikHelpers.setSubmitting(false))
    }

    const classes = useStyles();

    return (
        <Formik
        initialValues={{
            username: '',
            password: '',
            matchPassword: '',
            country: '',
            phoneNum: ''
        }}
        onSubmit={signUp}>
            {(props) => (
                <>
                <PropsState {...props} />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <p>Please Fill The Following</p>
                    <Form className={classes.form} noValidate>
                        <Grid>
                            <Grid>
                                <label htmlFor="username">Username</label>
                                <Field
                                    id="username"
                                    name="username"
                                    type="text"
                                />
                            </Grid>
                            <Grid>
                                <label htmlFor="password">Password</label>
                                <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                />
                            </Grid>
                            <Grid>
                                <label htmlFor="matchPassword">Match Password</label>
                                <Field
                                    id="matchPassword"
                                    name="matchPassword"
                                    type="password"
                                />
                            </Grid>
                            <Grid>
                                <label htmlFor="country">Country</label>
                                <Field
                                    id="country"
                                    name="country"
                                    as="select">
                                    <option value="">Select</option>
                                    <option value="LTU">Lithuania</option>
                                    <option value="US">United States</option>
                                    <option value="RU">Russia</option>
                                </Field>
                            </Grid>
                            <Grid>
                                <label htmlFor="phoneNum">Phone</label>
                                <Field
                                    id="phoneNum"
                                    name="phoneNum"
                                    type="text"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={props.isSubmitting}
                        >
                            Sign Up
                        </Button>
                    </Form>
                </div>
            </Container>
                </>
                )}
        </Formik>

    );
}