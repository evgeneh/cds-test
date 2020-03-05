import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {validate} from "./loginValidate";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Typography} from "@material-ui/core";
import headerImg from "../../media/login_img.JPG";
import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles(theme => ({
        form: {
            width: 200,
            padding: 20,
        },

        textField: {
            width: 200,
            paddingBottom: 10,
        },
    })
)

const textInput = ({label, input, meta, ...props}) => {
    return (
        <TextField
            label={label}
            placeholder={label}
            error={meta.touched && meta.invalid}
            helperText={meta.touched && meta.error}
            {...input}
            {...props}
        />
    )
}

const LoginForm = ({error, submitting, handleSubmit}) => {

    const styles = useStyles()

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <CardMedia
                component="img"
                alt="CDS Header Image"
                image={headerImg}
            />
            <br/>
            <Field name="login"
                   component={textInput}
                   label="Логин"
                   id="standard-required"
                   className={styles.textField}
            />
            <br/>
            <Field name="password"
                   component={textInput}
                   label="Пароль"
                   type="password"
                   autoComplete="current-password"
                   id="standard-password-input"
                   className={styles.textField}
            />
            <br/>
            <Button disabled={submitting}
                    type="submit"
                    variant="contained"
                    color="default"
            >
                Вход
            </Button>
            <Typography color="error" variant="body2">
                {error}
            </Typography>
        </form>
    )
}

export default reduxForm({form: 'loginForm', validate})(LoginForm)
