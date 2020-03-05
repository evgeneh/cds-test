import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import {reducer} from "redux-form";
import {authReducer} from './reducers/auth-reducer'
import {projectListReducer} from './reducers/project-list-reducer'
import {projectReducer} from './reducers/project-reducer'


const rootReducer = combineReducers({
    auth: authReducer,
    projectList: projectListReducer,
    project: projectReducer,
    form: reducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store