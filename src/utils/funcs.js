export const getColor = () =>
  "hsl(" +
  360 * Math.random() +
  "," +
  (25 + 70 * Math.random()) +
  "%," +
  (85 + 10 * Math.random()) +
  "%)";

export const percentageCompleted = (taskList) => {
  const completedTasks = taskList.reduce((acc, current) => {
    current.completed && acc++;
    return acc;
  }, 0);

  return Math.floor((completedTasks / taskList.length) * 100);
};

export const getSalutation = () => {
  let greet;
  const currentTime = new Date().getHours();
  if (currentTime < 12) {
    greet = "Good Morning!";
  } else if (currentTime >= 12 && currentTime <= 17) {
    greet = "Good Afternoon!";
  } else {
    greet = "Good Evening!";
  }

  return greet;
};
