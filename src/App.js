import React from 'react';
import {connect} from "react-redux";
import Container from '@material-ui/core/Container';

import LoginForm from './components/login-form/LoginForm'
import Preloader from './components/Preloader'
import {appInit} from "./redux/thunk";

const ProjectListContainer = React.lazy(() => import( "./components/project/ProjectListContainer"));

function App({isInit, isAuth, appInit}) {

    React.useEffect(() => {
        if (! isInit)
            appInit()
    }, [isInit])

    if (! isInit)
        return <Preloader labelText={'Инициализация'}/>

    return (
        <Container fixed maxWidth='md'>
            {
                (isAuth) ?
                    <React.Suspense fallback={<Preloader/>}>
                        <ProjectListContainer/>
                    </React.Suspense>
                    :
                    < LoginForm />
            }
        </Container>
    );
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        isInit: state.auth.isAppInitialized
    }
)

export default connect(mapStateToProps, {appInit})(App)
