import { React } from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { changeUserId } from "src/store/actions/tasks";

function Paginator() {
  const dispatch = useDispatch();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const changePage = (arg) => {
    dispatch(changeUserId(arg));
  };

  return (
    <div className={styles.paginator}>
      {pages.map((element) => (
        <button
          onClick={() => changePage(element)}
          className={styles.page}
          key={element}
        >
          Id: {element}
        </button>
      ))}
    </div>
  );
}

export default Paginator;
