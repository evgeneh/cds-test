import React from 'react';

import {API} from './api/axios'


import LoginForm from './components/login-form/LoginForm'

import Container from '@material-ui/core/Container';
import ProjectListContainer from "./components/project/ProjectListContainer";



function App() {

    let [isAuth, setAuth] = React.useState(false)

    let [loginError, setLoginError] = React.useState(null)

    const handleAuth = async (login, password) => {
        let response = await API.auth(login, password)
        if (response.data.success === true) {
            API.setAccessToken(response.data.data.accessToken)
            setLoginError(null)
            setAuth(true)
        } else {
            console.log(response.data)
            setLoginError(((response.data.errors &&( response.data.errors.length > 0)) ?  response.data.errors[0] : 'Ошибка авторизации'))
        }
    }

    return (
        <Container fixed maxWidth='md' >
            {
                (isAuth) ?
                    <ProjectListContainer/>
                    :
                    < LoginForm auth={handleAuth} error={loginError}/>
            }
        </Container>
    );
}


export default App;
