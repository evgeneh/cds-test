import React from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from '@material-ui/core/Box'
import LoginForm from '../login-form/LoginForm'

const useStyles = makeStyles(theme => ({
        root: {
            height: '90vh',
        }
    })
)


const Login = ({loginRequest}) => {

    const loginSubmit = (value) => {
        loginRequest(value.login, value.password)
    }

    const styles = useStyles()

    return (
        <div className={styles.root}>
            <Box display="flex"
                 alignItems="center"
                 justifyContent="center"
                 css={{height: '100%'}}>

                <LoginForm onSubmit={loginSubmit}/>
            </Box>

        </div>
    )
}

export default Login
