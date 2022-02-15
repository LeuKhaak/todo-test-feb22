import { React } from "react";
import styles from "./styles.module.scss";
import Error from "src/components/atoms/Error";

function TaskList({ errorData, tasksData, deleteTodos, markTodos, editTodos }) {
  return errorData && errorData.value ? (
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
            <div className={styles.buttonsWrapper}>
              <button
                onClick={() => editTodos(element.id)}
                className={styles.edit}
              >
                Edit
              </button>
              <button
                onClick={() => markTodos(element.id)}
                className={styles.edit}
              >
                Mark
              </button>
              <button
                onClick={() => deleteTodos(element.id)}
                className={styles.delete}
              >
                x
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TaskList;
