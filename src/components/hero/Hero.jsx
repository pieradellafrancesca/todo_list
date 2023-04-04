import { useContext } from "react";
import { Context } from "../../store";
import { percentageCompleted } from "../../utils/funcs";
import styles from "./index.module.scss";

const Hero = () => {
  const { state } = useContext(Context);

  return (
    <div className={styles.Hero}>
      <h1>Good Morning</h1>
      <div className={styles.info}>
        <div>
          <p>
            Today's {new Date().toLocaleString("en-EN", { weekday: "long" })}
          </p>
          <p>
            {new Date().toLocaleString("en-EN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div>
          <p>{percentageCompleted(state.taskListData)}% done</p>
          <p>Completed Tasks</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
