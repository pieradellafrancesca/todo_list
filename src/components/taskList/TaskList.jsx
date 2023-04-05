import { useState, useEffect, useContext } from "react";
import { Context } from "../../store";
// import { GET } from "../../utils/http";
import Task from "../task/Task";
import styles from "./index.module.scss";

const TaskList = () => {
  const { state, dispatch } = useContext(Context);
  // const [todoData, setTodoData] = useState([]);

  // useEffect(() => {
  //   GET("todo").then((data) => {
  //     // setTodoData(data.todos);
  //     dispatch({ type: "SET_TASK_LIST", payload: data.todos });
  //   });
  // }, []);

  return (
    <div className={styles.TaskList}>
      {state.taskListData.map((todo) => (
        <Task taskData={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TaskList;
