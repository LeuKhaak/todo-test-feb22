import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { getStartData } from "src/store/actions/person";
import { addData } from "src/store/actions/person";
import Creator from "src/components/organisms/Creator";

function ToDoList() {
  const dispatch = useDispatch();

  const tasksData = useSelector((state) => state.tasks.taskList);
  const tasksDataCopy = [...tasksData];

  const deleteTask = (id) => {
    const x = tasksDataCopy.filter((element) => element.id !== id);
    console.log(tasksDataCopy);
    dispatch(addData(x));
  };

  useEffect(() => {
    dispatch(getStartData());
  }, [dispatch]);

  //console.log(tasksData);

  return (
    <section className={styles.todo}>
      <div className={styles.container}>
        <Creator />
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
                  onClick={() => deleteTask(element.id)}
                  className={styles.delete}
                >
                  x
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ToDoList;
