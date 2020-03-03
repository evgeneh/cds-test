import React, {useState} from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";

import headerImg from '../../media/login_img.JPG'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
import {Typography} from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia'


const useStyles = makeStyles(theme => ({
    form: {
        width: 200,
        padding: 20,
    },

    textField: {
        width: 200,
        paddingBottom: 10,
    },

    root: {
        height: '90vh',
    }
}))

const LoginForm = ({auth, error}) => {

    let [state, setState] = useState({password: '', login: ''})

    const handleChange = (key) => (event) => {
        setState({...state, [key]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        auth(state.login, state.password)
    }

    const styles = useStyles()

    return (
        <div className={styles.root}>
            <Box display="flex"
                 alignItems="center"
                 justifyContent="center"
                 css={{height: '100%'}}>

                <form className={styles.form}>
                    <CardMedia
                        component="img"
                        alt="CDS Header Image"

                        image={headerImg}
                    /><br/>
                    <TextField required id="standard-required" label="Логин"
                               className={styles.textField}
                               value={state.login}
                               error={state.login === ""}
                               helperText={state.login === "" ? 'Введите логин!' : ' '}
                               onChange={handleChange('login')}
                    />
                    <br/>
                    <TextField
                        id="standard-password-input"
                        label="Пароль"
                        type="password"
                        autoComplete="current-password"

                        error={state.password === ""}
                        helperText={state.password === "" ? 'Введите пароль!' : ' '}

                        value={state.password}
                        className={styles.textField}
                        onChange={handleChange('password')}
                    />
                    <br/>
                    <Button variant="contained" color="default" onClick={handleSubmit}>
                        Вход
                    </Button>
                    {
                        (error) &&
                        <Typography color="error">
                            {error}
                        </Typography>
                    }

                </form>
            </Box>
        </div>
    );
}

export default LoginForm;
