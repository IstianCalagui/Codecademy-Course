const getSleepHours = (day) => {
    if (day === "Monday") {
      return 8;
    } else if (day === "Tuesday") {
      return 8;
    } else if (day === "Wednesday") {
      return 8;
    } else if (day === "Thursday") {
      return 8;
    } else if (day === "Friday") {
      return 8;
    } else if (day === "Saturday") {
      return 8;
    } else if (day === "Sunday") {
      return 8;
    }
  };
  
  const getActualSleepHours = () => {
    const totalSleepHours =
      getSleepHours("Monday") +
      getSleepHours("Tuesday") +
      getSleepHours("Wednesday") +
      getSleepHours("Thursday") +
      getSleepHours("Friday") +
      getSleepHours("Saturday") +
      getSleepHours("Sunday");
    return totalSleepHours;
  };
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("You got more sleep than needed");
    } else {
      console.log("You should get some rest");
    }
  };
  
  console.log(calculateSleepDebt());
  