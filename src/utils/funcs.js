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
