import { useReducer } from "react";
import { Context } from "./store/index";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "../src/components/hero";
import TaskList from "../src/components/taskList";
import Modal from "./components/modal/Modal";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const onHandleClick = () => dispatch({ type: "SET_MODAL", payload: true });

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <TaskList />
        <button onClick={onHandleClick} className={styles.addTodo}>
          +
        </button>
        {state.isModalVisible && <Modal />}
      </Context.Provider>
    </div>
  );
}

export default App;
