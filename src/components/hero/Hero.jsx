import { useContext } from "react";
import { Context } from "../../store";
import { percentageCompleted, getSalutation } from "../../utils/funcs";
import styles from "./index.module.scss";

const Hero = () => {
  const { state } = useContext(Context);

  return (
    <div className={styles.Hero}>
      <h1>{getSalutation()}</h1>
      <div className={styles.info}>
        <div>
          <p className={styles.firstLine}>
            Today's {new Date().toLocaleString("en-EN", { weekday: "long" })}
          </p>
          <p className={styles.secondLine}>
            {new Date().toLocaleString("en-EN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div>
          <p className={styles.firstLine}>
            {percentageCompleted(state.taskListData)}% done
          </p>
          <p className={styles.secondLine}>Completed Tasks</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
