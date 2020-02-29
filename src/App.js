import React from 'react';

import {API} from './api/axios'

import Container from '@material-ui/core/Container';

import LoginForm from './components/login-form/LoginForm'
import Preloader from './components/Preloader'

const ProjectListContainer = React.lazy(() => import( "./components/project/ProjectListContainer"));

function App() {
    //флаг авторизации
    let [isAuth, setAuth] = React.useState(false)

    let [loginError, setLoginError] = React.useState(null)

    const handleAuth = async (login, password) => {
        let response = await API.auth(login, password)
        if (response.data.success === true) {
            //передать токен в header запроса
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
                    <React.Suspense fallback={<Preloader/>}>
                        <ProjectListContainer/>
                    </React.Suspense>
                    :
                    < LoginForm auth={handleAuth} error={loginError}/>
            }
        </Container>
    );
}


export default App;
