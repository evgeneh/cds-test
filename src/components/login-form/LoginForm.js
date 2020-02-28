import React, {useState} from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'


const useStyles = makeStyles(theme => ({
    form: {
        width: 300,
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

const LoginForm = ({auth}) => {

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
                 css={{ height: '100%' }}>

                <form className={styles.form}>
                    <TextField required id="standard-required" label="Логин"
                               className={styles.textField}
                               onChange={handleChange('login')}
                    /><br/>
                    <TextField
                        id="standard-password-input"
                        label="Пароль"
                        type="password"
                        autoComplete="current-password"
                        className={styles.textField}
                        onChange={handleChange('password')}
                    /><br/>
                    <Button variant="contained" color="gray" onClick={handleSubmit}>
                        Вход
                    </Button>
                </form>
        </Box>
        </div>
    );
}


export default LoginForm;
