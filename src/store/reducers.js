export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASK_LIST":
      return {
        ...state,
        taskListData: action.payload,
      };
    case "CREATE_NEW_TASK":
      return {
        ...state,
        taskListData: [...state.taskListData, action.payload],
      };
    case "SET_MODAL":
      return {
        ...state,
        isModalVisible: action.payload,
      };
  }
};

// dispatch({
//   type: "CREATE_NEW_TASK",
//   payload: {
//     id: 31,
//     todo: "Call Mario",
//     completed: false,
//     userId: 45,
//   },
// });
