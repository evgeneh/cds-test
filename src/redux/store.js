import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import {authReducer} from './reducers/auth-reducer'
import  {projectListReducer} from './reducers/project-list-reducer'
import  {projectReducer} from './reducers/project-reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    projectList: projectListReducer,
    project: projectReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store