import React from 'react';

import {API} from './api/axios'


import LoginForm from './components/login-form/LoginForm'

import Container from '@material-ui/core/Container';
import ProjectListContainer from "./components/project/ProjectListContainer";



function App() {

    let [isAuth, setAuth] = React.useState(false)

    const handleAuth = async (login, password) => {
        let response = await API.auth(login, password)
        if (response.data.success === true) {
            API.setAccessToken(response.data.data.accessToken)
            setAuth(true)
        } else {
            console.log(response.data)
            setAuth(false)
        }
    }

    return (
        <Container fixed maxWidth='md' >
            {
                (isAuth) ?
                    <ProjectListContainer/>
                    :
                    < LoginForm auth={handleAuth}/>
            }
        </Container>
    );
}


export default App;
