import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import { BsCheckCircle } from "react-icons/bs";
import styles from "./index.module.scss";

const Task = ({ taskData }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    GET(`users/${taskData.userId}`).then((data) => setUserData(data));
  }, []);

  return (
    <div className={styles.Task}>
      <div className={styles.firstLine}>
        <img src={userData.image} alt={userData.username} />
        {taskData.completed && <BsCheckCircle className={styles.check} />}
      </div>

      <div className={styles.secondLine}>
        <p>
          <em>{userData.username}</em>
        </p>
        <p className={styles.todo}>{taskData.todo}</p>
      </div>
    </div>
  );
};

export default Task;
