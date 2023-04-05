export const initialState = {
  taskListData: [
    {
      id: 1,
      todo: "Clean out car",
      completed: false,
      username: "Luigi",
      image: "https://api.multiavatar.com/luigi.svg",
    },
    {
      id: 2,
      todo: "Learn Express.js",
      completed: true,
      username: "Pablo",
      image: "https://api.multiavatar.com/pablo.svg",
    },
    {
      id: 3,
      todo: "Take a hike at a local park",
      completed: false,
      username: "Gaga",
      image: "https://api.multiavatar.com/gaga.svg",
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
