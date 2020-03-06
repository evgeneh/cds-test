import {
    LOAD_STRUCT_ERROR,
    PROJECT_STRUCT_LOADING,
    SET_PROJECT_STRUCT
} from "../actions/project-actions";

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

