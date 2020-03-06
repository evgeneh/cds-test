import {
    LIST_LOADING_ERROR,
    PROJECT_LIST_LOADING,
    SET_PROJECT_ID,
    SET_PROJECT_LIST,
    SET_PROJECT_LIST_SHOW
} from "../actions/project-actions";

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
            return {...state, isListShow: true}
        default:
            return state
    }
}
