import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { makeCompleted, deleteTodo } from "../../../redux/features/todos";
import styles from "./styles.module.css";
import "./styles.module.css";

function Todo({ text, done, index, id }) {
  const dispatch = useDispatch();

  const handleChecked = () => {
    console.log(id);
    dispatch(makeCompleted(id, done));
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  return (
    <div className={!done ? styles.todo : styles.completedTodo}>
      <div className={!done ? styles.text : styles.completedText}>{text}</div>
      <div className={!done ? styles.btnContainer : styles.completedContainer}>
        <Checkbox
          className={styles.checked}
          checked={done}
          onChange={() => handleChecked()}
          icon={<CircleUnchecked />}
          checkedIcon={<CircleChecked />}
        />
        <button onClick={() => handleDelete(id)}>Х</button>
      </div>
    </div>
  );
}

export default Todo;
