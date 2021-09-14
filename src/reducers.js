import {combineReducers} from 'redux';
import windowReducer from './reducers/window';
import informationReducer from './reducers/information';
import projectsReducer from './reducers/projects';

const rootReducer = combineReducers({
    window: windowReducer,
    information: informationReducer,
    projects: projectsReducer
})

export default rootReducer;