import { Action, ActionType } from "../actionTypes/index";
export interface Project {
  projectId: number;
  projectName: string;
}
interface State {
  projects: Project[];
}
const initialState = {
  projects:[],
};
const projectReducer = (state: State = initialState, action: Action): State => {

  switch (action.type) {
    case ActionType.ADD_PROJECT:
      return {
        projects:action.payload
      };
    default:
      return state;
  }
};
export default projectReducer;