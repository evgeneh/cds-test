const SET_PROJECT_STRUCT = 'SET_PROJECT_STRUCT'
const LOAD_STRUCT_ERROR = 'LOAD_STRUCT_ERROR'
const PROJECT_STRUCT_LOADING = 'PROJECT_STRUCT_LOADING'

const initialState = {
    projectStruct: {},
    isLoading: false,
    loadError: null
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECT_STRUCT:
            return {...state, isLoading: false, projectStruct: {...action.payload}}
        case LOAD_STRUCT_ERROR:
            return {...state,  isLoading: false, loadError: action.loadError}
        case PROJECT_STRUCT_LOADING:
            return {...state, isLoading: true}
        default:
            return state
    }
}

export const projectBeginLoading = () => {
    return {type: PROJECT_STRUCT_LOADING}
}

export const setProjectStruct = (projectStruct) => {
    return {type: SET_PROJECT_STRUCT, payload: projectStruct}
}

export const setProjectLoadingError = (loadError) => {
    return { type: LOAD_STRUCT_ERROR , loadError}
}