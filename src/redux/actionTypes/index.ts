import { Project } from "../reducers/index";
export enum ActionType {
  ADD_PROJECT = "ADD_PROJECT",
}
interface actionAdd {
  type: ActionType.ADD_PROJECT;
  payload: Project[];
}
export type Action = actionAdd;
