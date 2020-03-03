import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import {authReducer} from './reducers/auth-reducer'
import  {projectListReducer} from './reducers/project-list-reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    projectList: projectListReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store