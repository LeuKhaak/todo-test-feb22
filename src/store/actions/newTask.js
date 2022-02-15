import {
  CREATE_DATA,
  CREATE_ERROR,
  DELETE_ERROR,
  DELETE_DATA,
  EDIT_DATA,
  EDIT_ERROR,
} from "../actionTypes/actionTypesNames";
import Repository from "../../repository";

export function newError(value) {
  return { type: CREATE_ERROR, newError: value };
}

export function deleteError(value) {
  return { type: DELETE_ERROR, value };
}

export function deleteReq(value) {
  return { type: DELETE_DATA, deleteRequest: value };
}

export function createData(value) {
  return { type: CREATE_DATA, newTask: value };
}

export function editThisData(value) {
  return { type: EDIT_DATA, editTask: value };
}

export function editError(value) {
  return { type: EDIT_ERROR, editError: value };
}

export const postNewData = (newTask) => async (dispatch) => {
  const { value, error } = await Repository.APIcreateData.postTask(newTask);
  if (error || !value) {
    dispatch(newError(true));
  } else {
    dispatch(newError(false));
    dispatch(createData(newTask));
  }
  //dispatch(createData(false));
};

export const deleteTask = (taskId) => async (dispatch) => {
  const { value, error } = await Repository.APIdeleteData.deleteTask(taskId);
  if (error || !value) {
    dispatch(deleteError(true));
  } else {
    dispatch(deleteError(false));
    dispatch(deleteReq(taskId));
    //dispatch(deleteRequest(false));
  }
};

export const putTask = (task) => async (dispatch) => {
  const { value, error } = await Repository.APIeditData.putTask(task);
  if (error || !value) {
    dispatch(editError(true));
  } else {
    dispatch(editError(false));
    dispatch(editThisData(value));
  }
};
