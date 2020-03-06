import {
    INITIALIZE_SUCCESS,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from "../actions/auth-actions";

let initialState = {
    isAppInitialized: false,
    isAuth: false,
    isLoginError: false,
    errorMessage: null
}

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

