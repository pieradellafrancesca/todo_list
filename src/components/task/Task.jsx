// import { useState, useEffect } from "react";
// import { GET } from "../../utils/http";
import { useContext } from "react";
import { Context } from "../../store";
import { FaCheck } from "react-icons/fa";
import styles from "./index.module.scss";

const Task = ({ taskData }) => {
  // const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   GET(`users/${taskData.userId}`).then((data) => setUserData(data));
  // }, []);

  const { state, dispatch } = useContext(Context);

  const onHandleCompleted = () => {
    console.log(taskData);
    dispatch({ type: "SET_TASK_COMPLETED", payload: taskData.id });
  };

  const onHandleDeleteTask = () => {
    dispatch({ type: "DELETE_TASK_COMPLETED", payload: taskData.id });
  };

  return (
    <div className={`${styles.Task} ${taskData.completed && styles.completed}`}>
      <div className={styles.firstLine}>
        <img src={taskData.image} alt={taskData.username} />
        {taskData.completed && (
          <FaCheck onClick={onHandleDeleteTask} className={styles.check} />
        )}
      </div>

      <div className={styles.secondLine}>
        <p>
          <em>{taskData.username}</em>
        </p>
        <p onClick={onHandleCompleted} className={styles.todo}>
          {taskData.todo}
        </p>
      </div>
    </div>
  );
};

export default Task;
