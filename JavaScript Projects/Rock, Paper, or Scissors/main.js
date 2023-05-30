const getUserChoice = (userInput) => {
    const userChoice = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      console.log("Invalid input.");
    }
  };
  
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
        break;
      case 1:
        return "scissors";
        break;
      case 2:
        return "paper";
        break;
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      console.log("The game was a tie");
    }else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer won";
      } else {
        return "User won";
      }
    }else if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer won";
      } else {
        return "User won";
      }
    }else if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer won";
      } else if(computerChoice === "paper") {
        return "User won";
      }
    }else{
      console.log('No winner');
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice("scissors");
    let computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw:" + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  