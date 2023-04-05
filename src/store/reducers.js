export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASK_LIST":
      return {
        ...state,
        taskListData: action.payload,
      };
    case "ADD_NEW_TASK":
      return {
        ...state,
        taskListData: [action.payload, ...state.taskListData],
      };
    case "SET_TASK_COMPLETED":
      return {
        ...state,
        taskListData: state.taskListData.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "DELETE_TASK_COMPLETED":
      return {
        ...state,
        taskListData: state.taskListData.filter(
          (task) => task.id !== action.payload
        ),
      };
    case "SET_MODAL":
      return {
        ...state,
        isModalVisible: action.payload,
      };
    case "SET_TEMPTODO":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          todo: action.payload.todo,
          username: action.payload.username,
          image: action.payload.image,
        },
      };
    case "SET_TEMPTODO_ID":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          id: action.payload,
        },
      };
  }
};
