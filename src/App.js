import React from 'react';

import {API} from './api/axios'

import Container from '@material-ui/core/Container';

import LoginForm from './components/login-form/LoginForm'
import Preloader from './components/Preloader'

const ProjectListContainer = React.lazy(() => import( "./components/project/ProjectListContainer"));

function App() {
    //флаг авторизации
    let [isAuth, setAuth] = React.useState(true)
    API.setAccessToken(" eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZWJhcHAiLCJpYXQiOjE1ODMyNDQ4NTUsImV4cCI6MTYxNDc4MDg1NSwiaWQiOjF9.3i8fdrbLb_ta_iStKkHKllo_kp39Tg7H_5RZx8o95pg")

    let [loginError, setLoginError] = React.useState(null)

    const handleAuth = async (login, password) => {
        let response = await API.auth(login, password)
        if (response.data.success === true) {
            //передать токен в header запроса
            //API.setAccessToken(response.data.data.accessToken)

            setLoginError(null)
            setAuth(true)
        } else {
            console.log(response.data)
            setLoginError(((response.data.errors && (response.data.errors.length > 0)) ? response.data.errors[0] : 'Ошибка авторизации'))
        }
    }

    return (
        <Container fixed maxWidth='md'>
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
