import { useState, useContext } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";

const Modal = () => {
  // const [inputValue, setInputValue] = useState("");
  const { state, dispatch } = useContext(Context);

  // const onHandleChange = (event) => setInputValue(() => event.target.value);
  const onHandleClose = () => {
    dispatch({ type: "SET_MODAL", payload: false });
  };

  // const onHandleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch({
  //     type: "ADD_NEW_TASK",
  //     payload: {
  //       id: state.taskListData.length + 1,
  //       todo: inputValue,
  //       completed: false,
  //       userId: Math.floor(Math.random() * 100) + 1,
  //     },
  //   });
  //   dispatch({ type: "SET_MODAL", payload: false });
  //   // alert("Task is entered!");
  // };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_NEW_TASK", payload: state.tempTodo });
    dispatch({ type: "SET_MODAL", payload: false });
    // console.log(state, [...state.taskListData, state.tempTodo].length);
  };

  const onHandleChange = (event) => {
    dispatch({
      type: "SET_TEMPTODO_ID",
      payload: [...state.taskListData, state.tempTodo].length,
    });
    switch (event.target.name) {
      case "todo":
        return dispatch({
          type: "SET_TEMPTODO",
          payload: { ...state.tempTodo, todo: event.target.value },
        });
      case "username":
        return dispatch({
          type: "SET_TEMPTODO",
          payload: { ...state.tempTodo, username: event.target.value },
        });
      case "image":
        return dispatch({
          type: "SET_TEMPTODO",
          payload: { ...state.tempTodo, image: event.target.value },
        });
    }
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
            name="todo"
            className={styles.inputTask}
            type="text"
            placeholder="Todo..."
            value={state.tempTodo.todo}
            onChange={onHandleChange}
            required
          />
          <input
            name="username"
            className={styles.inputTask}
            type="text"
            placeholder="Username..."
            value={state.tempTodo.username}
            onChange={onHandleChange}
            required
          />
          <input
            name="image"
            className={styles.inputTask}
            type="text"
            placeholder="Photo..."
            value={state.tempTodo.image}
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
