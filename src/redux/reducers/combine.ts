import { combineReducers } from "redux";
import projectReducer from './index'
const reducers = combineReducers({
    projects: projectReducer
})
export default reducers;
export type RootState = ReturnType<typeof reducers>