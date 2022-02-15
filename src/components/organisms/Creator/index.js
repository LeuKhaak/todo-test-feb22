import { React, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { postNewData } from "src/store/actions/newTask";
import { createData } from "src/store/actions/newTask";
import { addData } from "src/store/actions/tasks";

function Creator() {
  const dispatch = useDispatch();

  const [newTodos, setNewTodos] = useState(false);

  const tasksData = useSelector((state) => state.tasks.taskList);
  const newError = useSelector((state) => state.newTask.newError);
  const tasksDataCopy = tasksData ? [...tasksData] : "";
  const newTask = useSelector((state) => state.newTask.newTask);
  const userId = tasksData && tasksData[0] ? tasksData[0].userId : "";

  const createNewTodos = (event) => {
    setNewTodos({
      userId: userId,
      id: uuidv4(),
      title: event.target.value,
      completed: false,
    });
  };

  const postNewTodos = (event) => {
    if (event.key === "Enter" && event.target.value.length > 2) {
      dispatch(postNewData(newTodos));
      event.target.value = "";
    }
  };

  useEffect(() => {
    if (newTask) {
      tasksDataCopy.unshift(newTask);
      dispatch(addData(tasksDataCopy));
      dispatch(createData(false));
    } else if (newError && newError.newError) alert("The post request failed!");
  }, [newError, dispatch, newTask]);

  return (
    <div className={styles.creator}>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          name="new-title"
          placeholder="Create new task"
          onChange={(event) => createNewTodos(event)}
          onKeyPress={(event) => postNewTodos(event)}
        />
      </div>
    </div>
  );
}

export default Creator;
