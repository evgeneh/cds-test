//action for project structure
export const SET_PROJECT_STRUCT = 'project/SET_PROJECT_STRUCT'
export const LOAD_STRUCT_ERROR = 'project/LOAD_STRUCT_ERROR'
export const PROJECT_STRUCT_LOADING = 'project/PROJECT_STRUCT_LOADING'
export const SET_PROJECT_ID = 'project/SET_PROJECT_ID'
 //actions for project list
export const SET_PROJECT_LIST = 'project/SET_PROJECT_LIST'
export const LIST_LOADING_ERROR = 'project/LIST_LOADING_ERROR'
export const PROJECT_LIST_LOADING = 'project/PROJECT_LIST_LOADING'

export const SET_PROJECT_LIST_SHOW = 'project/SET_PROJECT_LIST_SHOW'

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

export const projectBeginLoading = () => {
    return {type: PROJECT_STRUCT_LOADING}
}

export const setProjectStruct = (projectStruct) => {
    return {type: SET_PROJECT_STRUCT, payload: projectStruct}
}

export const setProjectLoadingError = (loadError) => {
    return { type: LOAD_STRUCT_ERROR , loadError}
}