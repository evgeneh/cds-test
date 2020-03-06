export const INITIALIZE_SUCCESS = 'auth/INITIALIZE_SUCCESS'
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const LOGIN_ERROR = 'auth/LOGIN_ERROR'


export const loginSuccess = () => {
    return {type: LOGIN_SUCCESS}
}

export const setLoginError = (errorMessage) => {
    return {type: LOGIN_ERROR, errorMessage}
}

export const setAppInitialized = (isAuth) => {
    return {type: INITIALIZE_SUCCESS, isAuth}
}