import {
  CREATE_DATA,
  POST_DATA,
  CREATE_ERROR,
} from "../actionTypes/actionTypesNames";

const initialState = {
  newTask: "",
  getError: null,
};

function loadTasks(state = initialState, action) {
  switch (action.type) {
    case CREATE_DATA:
      return {
        ...state,
        newTask: action.newTask,
      };
    case POST_DATA:
      return {
        ...state,
        newTask: action.newTask,
      };
    case CREATE_ERROR:
      return {
        ...state,
        getError: action,
      };
    default:
      return state;
  }
}
export default loadTasks;
