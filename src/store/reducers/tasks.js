import {
  START_DATA,
  GET_ERROR,
  //SHOW_LOADER,
} from "../actionTypes/actionTypesNames";

const initialState = {
  taskList: [],
  tiles: true,
  loader: false,
  getError: null,
};

function loadTasks(state = initialState, action) {
  switch (action.type) {
    case START_DATA:
      return {
        ...state,
        taskList: action.taskList,
      };
    //case SHOW_LOADER:
    //  return {
    //    ...state,
    //    loader: action.loader,
    //  };
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
