import {
  CREATE_DATA,
  CREATE_ERROR,
  DELETE_ERROR,
  DELETE_DATA,
} from "../actionTypes/actionTypesNames";

const initialState = {
  newTask: false,
  newError: null,
  deleteError: null,
  deleteRequest: false,
};

function loadTasks(state = initialState, action) {
  switch (action.type) {
    case CREATE_DATA:
      return {
        ...state,
        newTask: action.newTask,
      };
    case CREATE_ERROR:
      return {
        ...state,
        newError: action,
      };
    case DELETE_ERROR:
      return {
        ...state,
        deleteError: action,
      };
    case DELETE_DATA:
      return {
        ...state,
        deleteRequest: action.deleteRequest,
      };
    default:
      return state;
  }
}
export default loadTasks;
