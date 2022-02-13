import { combineReducers } from "redux";
import tasks from "./tasks";
import newTask from "./newTask";

const reducers = combineReducers({
  tasks,
  newTask,
});
export default reducers;
