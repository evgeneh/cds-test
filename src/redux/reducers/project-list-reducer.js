const SET_PROJECT_LIST = 'SET_PROJECT_LIST'
const LIST_LOADING_ERROR = 'LIST_LOADING_ERROR'
const PROJECT_LIST_LOADING = 'PROJECT_LIST_LOADING'
const SET_PROJECT_ID = 'SET_PROJECT_ID'
const SET_PROJECT_LIST_SHOW = 'SET_PROJECT_LIST_SHOW'

const initialState = {
    items: [],
    isLoading: false,
    loadError: null,
    isListShow: true,
    currentProjectId: null,
    currentStructureId: null
}

export const projectListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECT_LIST:
            return {...state, isLoading: false, items: [...action.payload]}
        case LIST_LOADING_ERROR:
            return {...state, isLoading: false, loadError: action.loadError}
        case PROJECT_LIST_LOADING:
            return {...state, isLoading: true}
        case SET_PROJECT_ID:
            return {...state, isListShow: false, currentProjectId: action.id, currentStructureId: action.structId}
        case SET_PROJECT_LIST_SHOW:
            return {state, isListShow: true}
        default:
            return state
    }
}

export const projectListBeginLoading = () => {
    return {type: PROJECT_LIST_LOADING}
}

export const setProjectList = (projectList) => {
    return {type: SET_PROJECT_LIST, payload: projectList}
}

export const setListLoadingError = (loadError) => {
    return { type: LIST_LOADING_ERROR , loadError}
}

export const setProjectId = (id, structId) => {
    return {type: SET_PROJECT_ID, id, structId}
}

export const  switchProjectList = () => {
    return {type: SET_PROJECT_LIST_SHOW}
}