import {
  START_DATA,
  ADD_DATA,
  GET_ERROR,
  USER_ID,
} from "../actionTypes/actionTypesNames";
import Repository from "../../repository";

export function getError(value) {
  return { type: GET_ERROR, value };
}

export function startData(value) {
  return { type: START_DATA, taskList: value };
}
export function changeUserId(value) {
  return { type: USER_ID, userId: value };
}
export function addData(value) {
  return { type: ADD_DATA, taskList: value };
}
export const getStartData = (id) => async (dispatch) => {
  const { value, error } = await Repository.APIstartData.getPersons(id);
  if (error || !value) {
    dispatch(getError(true));
  } else dispatch(getError(null));
  dispatch(startData(value));
};
