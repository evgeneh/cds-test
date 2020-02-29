import React from 'react';

import {API} from './api/axios'


import LoginForm from './components/login-form/LoginForm'

import Container from '@material-ui/core/Container';
import ProjectContainer from "./components/project/ProjectContainer";



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
        <Container fixed>
            {
                (isAuth) ?
                    <ProjectContainer/>
                    :
                    < LoginForm auth={handleAuth}/>
            }
        </Container>
    );
}


export default App;
