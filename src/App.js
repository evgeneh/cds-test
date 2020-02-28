import React from 'react';

import {API} from './api/axios'

import APPHeader from "./components/header/Header"
import LoginForm from './components/login-form/LoginForm'

import Container from '@material-ui/core/Container';

function App() {

    const handleAuth = async (login, password) => {
        let response = await API.auth(login, password)
        console.log(response.data)
    }

    let [isAuth, setAuth] = React.useState(false, [])


  return (
      <Container fixed>
          {
              (isAuth) ?
                  <APPHeader />
               :
               < LoginForm auth={handleAuth} />
          }
      </Container>
  );
}


export default App;
