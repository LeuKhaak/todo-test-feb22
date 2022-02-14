import { React, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
//import { createData } from "src/store/actions/newTask";
import { addData } from "src/store/actions/person";

function Creator() {
  const dispatch = useDispatch();

  const [taskTitle, setTaskTitle] = useState("");

  const tasksData = useSelector((state) => state.tasks.taskList);
  const tasksDataCopy = [...tasksData];
  //const newTask = useSelector((state) => state.newTask.newTask);
  const userId = tasksData[0] ? tasksData[0].userId : "";
  //console.log(userId);

  const createTitle = (event) => {
    if (event.key === "Enter" && event.target.value.length > 2) {
      setTaskTitle(event.target.value);
      event.target.value = "";
    }
  };

  const createNewTask = () => ({
    userId: userId,
    id: uuidv4(),
    title: taskTitle,
    completed: false,
  });

  useEffect(() => {
    const task = createNewTask();
    //dispatch(createData(task));
    tasksDataCopy.unshift(task);
    dispatch(addData(tasksDataCopy));
  }, [dispatch, taskTitle]);

  //console.log(newTask);
  //console.log(tasksData);
  return (
    <div className={styles.creator}>
      {/*<button>Create new task</button>*/}
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          name="new-title"
          placeholder="Create new task"
          //onChange={(event) => createTitle(event.target.value)}
          onKeyPress={(event) => createTitle(event)}
        />
      </div>
    </div>
  );
}

export default Creator;
