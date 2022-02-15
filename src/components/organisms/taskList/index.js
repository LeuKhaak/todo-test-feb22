import { React, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Error from "src/components/atoms/Error";
//import { v4 as uuidv4 } from "uuid";
//import { useSelector, useDispatch } from "react-redux";
//import { postNewData } from "src/store/actions/newTask";
//import { addData } from "src/store/actions/tasks";

function TaskList({ errorData, tasksData, deleteTodos }) {
  return errorData ? (
    <Error notice="The get request failed!" />
  ) : (
    <div className={styles.taskList}>
      {tasksData &&
        tasksData.map((element) => (
          <div key={element.id} id={element.id} className={styles.task}>
            <div
              className={
                element.completed ? styles.completed : styles.taskActive
              }
            >
              {element.title}
            </div>
            <button
              onClick={() => deleteTodos(element.id)}
              className={styles.delete}
            >
              x
            </button>
          </div>
        ))}
    </div>
  );
}

export default TaskList;
