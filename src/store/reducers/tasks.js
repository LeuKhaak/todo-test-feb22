import {
  START_DATA,
  GET_ERROR,
  ADD_DATA,
  USER_ID,
} from "../actionTypes/actionTypesNames";

const initialState = {
  userId: 1,
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
    case USER_ID:
      return {
        ...state,
        userId: action.userId,
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
