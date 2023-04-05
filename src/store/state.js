export const initialState = {
  taskListData: [
    {
      id: 1,
      todo: "Clean out car",
      completed: false,
      username: "Luigi",
      image: "https://robohash.org/luigi",
    },
    {
      id: 2,
      todo: "Learn Express.js",
      completed: true,
      username: "Pablo",
      image: "https://robohash.org/pablo",
    },
    {
      id: 3,
      todo: "Take a hike at a local park",
      completed: false,
      username: "Gaga",
      image: "https://robohash.org/gaga",
    },
  ],
  isModalVisible: false,
  tempTodo: {
    todo: "",
    username: "",
    image: "",
    id: "",
  },
};
