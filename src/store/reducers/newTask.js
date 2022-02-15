import {
  CREATE_DATA,
  CREATE_ERROR,
  DELETE_ERROR,
  DELETE_DATA,
  EDIT_DATA,
  EDIT_ERROR,
} from "../actionTypes/actionTypesNames";

const initialState = {
  newTask: false,
  newError: null,
  deleteError: null,
  deleteRequest: false,
  editTask: false,
  editError: false,
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
    case EDIT_DATA:
      return {
        ...state,
        editTask: action.editTask,
      };
    case EDIT_ERROR:
      return {
        ...state,
        editError: action.editError,
      };
    default:
      return state;
  }
}
export default loadTasks;
