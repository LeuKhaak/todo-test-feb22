import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { getStartData } from "src/store/actions/tasks";
import { addData } from "src/store/actions/tasks";
import { deleteTask } from "src/store/actions/newTask";
import { deleteReq } from "src/store/actions/newTask";
import Creator from "src/components/organisms/Creator";
import TaskList from "src/components/organisms/taskList";

function ToDoList() {
  const dispatch = useDispatch();

  const tasksData = useSelector((state) => state.tasks.taskList);
  const errorData = useSelector((state) => state.tasks.getError);
  const deleteRequest = useSelector((state) => state.newTask.deleteRequest);
  const deleteError = useSelector((state) => state.newTask.deleteError);
  const tasksDataCopy = tasksData ? [...tasksData] : "";

  const deleteTodos = (id) => {
    dispatch(deleteTask(id));
  };

  useEffect(() => {
    if (tasksData === "") dispatch(getStartData());
  }, [dispatch]);

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
        />
      </div>
    </section>
  );
}

export default ToDoList;
