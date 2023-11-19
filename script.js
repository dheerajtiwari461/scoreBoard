// Initialize score for Team A and Team B

let teamAScore = 0;
let teamBScore = 0;

let teamAScoreValue;
let teamBScoreElement;

let incrementScore = (team) => {
  if (team === "teamA") {
    teamAScore++;
    teamAScoreValue.textContent = teamAScore;
  } else if (team === "teamB") {
    teamBScore++;
    teamBScoreElement.textContent = teamBScore;
  }
};

document.addEventListener("DOMContentLoaded", (event) => {
  teamAScoreValue = document.getElementById("teamAScore");
  teamBScoreElement = document.getElementById("teamBScore");
});


//function to decrement score and no negavite score

let decrementScore = (team) => {
  if (team === "teamA") {
    if (teamAScore > 0) {
      teamAScore--;
      teamAScoreValue.textContent = teamAScore;
    }
  } else if (team === "teamB") {
    if (teamBScore > 0) {
      teamBScore--;
      teamBScoreElement.textContent = teamBScore;
    }
  }
};

