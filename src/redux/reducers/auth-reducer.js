let initialState = {
    isAppInitialized: false,
    isAuth: false,
    isLoginError: false,
    errorMessage: null
}

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {...state, isAppInitialized: true, isAuth: action.isAuth}
        case LOGIN_SUCCESS:
            return {...state, isAuth: true, isLoginError: false}
        case LOGIN_ERROR:
            return {...state, isLoginError: true, errorMessage: action.errorMessage}
        default:
            return state
    }
};

export const loginSuccess = () => {
    return {type: LOGIN_SUCCESS}
}

export const setLoginError = (errorMessage) => {
    return {type: LOGIN_ERROR, errorMessage}
}

export const setAppInitialized = (isAuth) => {
    return {type: INITIALIZE_SUCCESS, isAuth}
}