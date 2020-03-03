import Cookies from 'js-cookie'
import {API} from '../api/axios'

import {projectListBeginLoading, setProjectList, setListLoadingError} from './reducers/project-list-reducer'
import {setAppInitialized} from './reducers/auth-reducer'

export const appInit = () => {
    return async (dispatch) => {
        const token =  Cookies.get('token')
        if (token) {
            API.setAccessToken(token)
            let loadSuccess = await dispatch(projectListRequest())
            if (loadSuccess)
                dispatch(setAppInitialized(true))
        }
        //приложение инициализировано но пользователь не авторизован
        dispatch(setAppInitialized(false))
    }
}

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

