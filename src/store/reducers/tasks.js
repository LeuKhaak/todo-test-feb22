import {
  START_DATA,
  GET_ERROR,
  ADD_DATA,
} from "../actionTypes/actionTypesNames";

const initialState = {
  taskList: "",
  getError: null,
};

function loadTasks(state = initialState, action) {
  switch (action.type) {
    case START_DATA:
      return {
        ...state,
        taskList: action.taskList,
      };
    case ADD_DATA:
      return {
        ...state,
        taskList: action.taskList,
      };
    case GET_ERROR:
      return {
        ...state,
        getError: action,
      };
    default:
      return state;
  }
}
export default loadTasks;
