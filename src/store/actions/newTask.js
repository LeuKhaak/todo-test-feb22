import {
  CREATE_DATA,
  CREATE_ERROR,
  //SHOW_LOADER,
} from "../actionTypes/actionTypesNames";
import Repository from "../../repository";

//export function showLoader(value) {
//  return { type: SHOW_LOADER, loader: value };
//}

export function getError(value) {
  return { type: CREATE_DATA, value };
}

export function createData(value) {
  return { type: CREATE_ERROR, newTask: value };
}

export const postNewData = () => async (dispatch) => {
  //dispatch(showLoader(true));
  const { value, error } = await Repository.APIcreateData.postTask();
  if (error || !value) {
    dispatch(getError(true));
    //dispatch(showLoader(false));
  }
  dispatch(createData(value));
  //dispatch(showLoader(false));
};
