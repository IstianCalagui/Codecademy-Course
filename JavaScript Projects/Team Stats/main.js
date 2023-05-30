const team = {
    _players: [
      {
        firstName: "Averie",
        lastName: "Gaspar",
        age: 19,
      },
      {
        firstName: "Paul",
        lastName: "Mercado",
        age: 19,
      },
      {
        firstName: "Aljon",
        lastName: "Pena",
        age: 19,
      },
    ],
    _games: [
      {
        opponent: "Mommi Che",
        teamPoints: 0,
        opponentPoints: 0,
      },
      {
        opponent: "Mommi Erna",
        teamPoints: 0,
        opponentPoints: 0,
      },
      {
        opponent: "Mommi Lorie",
        teamPoints: 0,
        opponentPoints: 0,
      },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstname, newLastName, newAge) {
      const player = {
        firstName: newFirstname,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this._games.push(game);
    },
  };
  team.addGame("Titans", 100, 98);
  team.addPlayer("Bugs", "Bunny", "76");
  console.log(team.games);
  