import { useState, useContext } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";

const Modal = () => {
  const [inputValue, setInputValue] = useState("");
  const { state, dispatch } = useContext(Context);

  const onHandleChange = (event) => setInputValue(() => event.target.value);
  const onHandleClose = () => {
    dispatch({ type: "SET_MODAL", payload: false });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "CREATE_NEW_TASK",
      payload: {
        id: state.taskListData.length + 1,
        todo: inputValue,
        completed: false,
        userId: Math.floor(Math.random() * 100) + 1,
      },
    });
    dispatch({ type: "SET_MODAL", payload: false });
    // alert("Task is entered!");
  };

  return (
    <div className={styles.Modal}>
      <div className={styles.overlay} onClick={onHandleClose}></div>
      <div className={styles.content}>
        <h3>Enter a new task</h3>
        <button className={styles.close} onClick={onHandleClose}>
          X
        </button>
        <form onSubmit={onHandleSubmit}>
          <input
            className={styles.inputTask}
            type="text"
            placeholder="Todo..."
            value={inputValue}
            onChange={onHandleChange}
            required
          />
          <input className={styles.submit} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
