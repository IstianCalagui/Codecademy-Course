let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 20;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Runner: ${raceNumber} : Your race starts at 9:30`);
}
