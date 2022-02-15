import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { getStartData } from "src/store/actions/tasks";
import { addData } from "src/store/actions/tasks";
import { deleteTask } from "src/store/actions/newTask";
import { deleteReq } from "src/store/actions/newTask";
//import { putTask } from "src/store/actions/newTask";
import Creator from "src/components/organisms/Creator";
import TaskList from "src/components/organisms/TaskList";
import Paginator from "src/components/organisms/Paginator";

function ToDoList() {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.tasks.userId);
  const tasksData = useSelector((state) => state.tasks.taskList);
  const errorData = useSelector((state) => state.tasks.getError);
  const deleteRequest = useSelector((state) => state.newTask.deleteRequest);
  const deleteError = useSelector((state) => state.newTask.deleteError);
  const tasksDataCopy = tasksData ? [...tasksData] : "";

  //const editData = useSelector((state) => state.newTask.editData);

  const deleteTodos = (id) => {
    dispatch(deleteTask(id));
  };

  const markTodos = (id) => {
    const ind = tasksDataCopy.findIndex((item) => item.id === id);
    if (id !== -1) {
      tasksDataCopy[ind].completed = !tasksDataCopy[ind].completed;
      //dispatch(putTask(tasksDataCopy[ind]));
      //	if (editData)
      dispatch(addData(tasksDataCopy));
    }
  };

  const editTodos = (id) => {
    const ind = tasksDataCopy.findIndex((item) => item.id === id);
    if (id !== -1) {
      const editedTask = prompt("Enter new task", tasksDataCopy[ind].title);
      tasksDataCopy[ind].title = editedTask
        ? editedTask
        : tasksDataCopy[ind].title;
      dispatch(addData(tasksDataCopy));
    }
  };

  useEffect(() => {
    dispatch(getStartData(userId));
  }, [userId]);

  useEffect(() => {
    if (deleteRequest) {
      const x = tasksDataCopy.filter((element) => element.id !== deleteRequest);
      dispatch(addData(x));
      dispatch(deleteReq(false));
    } else if (deleteError && deleteError.value)
      alert("The delete request failed!");
  }, [deleteRequest, deleteError]);

  return (
    <section className={styles.todo}>
      <div className={styles.container}>
        <Creator />
        <TaskList
          tasksData={tasksData}
          errorData={errorData}
          deleteTodos={deleteTodos}
          markTodos={markTodos}
          editTodos={editTodos}
        />
        <Paginator />
      </div>
    </section>
  );
}

export default ToDoList;
