import Cookies from 'js-cookie'
import {API} from '../api/axios'

import {projectListBeginLoading, setProjectList, setListLoadingError} from './reducers/project-list-reducer'
import {setAppInitialized, loginSuccess, setLoginError} from './reducers/auth-reducer'

export const appInit = () => {
    return async (dispatch) => {
        const token = Cookies.get('token')
        if (token) {
            API.setAccessToken(token)
            let loadSuccess = await dispatch(projectListRequest())
            if (loadSuccess) {
                dispatch(setAppInitialized(true))
                return
            }
        }
        //приложение инициализировано но пользователь не авторизован
        dispatch(setAppInitialized(false))
    }
}

//загрузить список проектов
export const projectListRequest = () => {
    return async (dispatch) => {
        dispatch(projectListBeginLoading())
        try {
            let projectResponse = await API.getProjectList()
            if (projectResponse.data.success === true) {
                dispatch(setProjectList(projectResponse.data.data))
                return true
            } else {
                dispatch(setListLoadingError(projectResponse?.errors[0] || 'Load List Error'))
                return false
            }
        } catch (e) {
            dispatch(setListLoadingError(e))
            return false
        }
    }
}

export const loginRequest = (login, password) => async (dispatch) => {
    let response = await API.auth(login, password)
    if (response.data.success === true) {
        //передать токен в header запроса
        API.setAccessToken(response.data.data.accessToken)
        Cookies.set('token', response.data.data.accessToken, {expires: 30});
        dispatch(loginSuccess())
    } else {
        let loginErrorMessage = (response.data.errors?.length > 0) ? response.data.errors[0] : 'Ошибка авторизации'
        dispatch(setLoginError(loginErrorMessage))
    }
}