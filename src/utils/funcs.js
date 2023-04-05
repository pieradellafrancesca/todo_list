export const percentageCompleted = (taskList) => {
  const completedTasks = taskList.reduce((acc, current) => {
    current.completed && acc++;
    return acc;
  }, 0);

  return taskList.length
    ? Math.floor((completedTasks / taskList.length) * 100)
    : 0;
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
