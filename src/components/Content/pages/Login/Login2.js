import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {getLogin} from "../../../../api/UserApi";
import {setJwt, setUserData} from "../../../../store/Slices/UserSlice";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();

    const dispatch = useDispatch() // [Dispatch Actions and Data]

    const postLogin = (formValues, formikHelpers) => {
        formikHelpers.setSubmitting(true)

        getLogin(formValues)
            .then(({data, headers: {authorization}}) => {
                    dispatch(setUserData(data)) // [ {type: 'user/setUserData', payload: data}
                    dispatch(setJwt(authorization))

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
            onSubmit={postLogin}>
            {(props) => (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button type="submit" className={classes.submit} color="primary">Login</Button>
                    </Form>
                </div>
                <Box mt={8}>
                </Box>
            </Container>
            )}
        </Formik>
)}