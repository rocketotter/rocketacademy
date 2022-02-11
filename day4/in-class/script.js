// /// Hawker Food Randomness
// var randomNumberGen = function () {
//   // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 6.
//   var randomDecimal = Math.random() * 3;

//   // Remove the decimal with the floor operation.
//   // This will be an integer from 1 to 3 inclusive.
//   var randomInteger = Math.floor(randomDecimal) + 1;

//   return randomInteger;
// };

// var winGames = 0;
// var loseGames = 0;
// var totalGames = 0;

// var currentGameMode = "waiting for user name";
// var userName = "";

// var numSPS2Str = function (numberSPS) {
//   var str_SPS = "";
//   if (numberSPS == 1) {
//     str_SPS = "scissors";
//   } else if (numberSPS == 2) {
//     str_SPS = "paper";
//   } else if (numberSPS == 3) {
//     str_SPS = "stone";
//   }
//   return str_SPS;
// };

// var calculateWinRate = function () {
//   var winRate_str = (winGames / totalGames) * 100;
//   winRate_str = Number(winRate_str).toFixed(2);
//   return winRate_str;
// };

// var game_mode_SPS = function (userinput_SPS) {
//   var currentGameModeStr = "Current game mode is in SPS! <br><br><br>";
//   var myOutputValue = "";

//   // validate user's input to be within our expected values
//   if (
//     userinput_SPS != "scissors" ||
//     userinput_SPS != "paper" ||
//     userinput_SPS != "stone"
//   ) {
//     myOutputValue = "Please enter scissors, paper, stone";
//   }
//   var pcSelectedNumber = randomNumberGen();
//   var pcSelectedSPS = numSPS2Str(pcSelectedNumber); //convert random gen-ed number to str

//   if (
//     // Win conditions
//     (userinput_SPS == "scissors" && pcSelectedSPS == "paper") ||
//     (userinput_SPS == "paper" && pcSelectedSPS == "stone") ||
//     (userinput_SPS == "stone" && pcSelectedSPS == "scissors")
//   ) {
//     totalGames++;
//     winGames++;
//     myOutputValue = `You win! You chose ${userinput_SPS},<br> PC chose ${pcSelectedSPS}, <br>your win rate is ${calculateWinRate()}%`;
//   }
//   if (
//     // Draw conditions
//     userinput_SPS == pcSelectedSPS
//   ) {
//     totalGames++;
//     myOutputValue = `Draw! You chose ${userinput_SPS},<br> PC chose ${pcSelectedSPS},<br>your win rate is ${calculateWinRate()}%`;
//   }
//   if (
//     (userinput_SPS == "scissors" && pcSelectedSPS == "stone") ||
//     (userinput_SPS == "paper" && pcSelectedSPS == "scissors") ||
//     (userinput_SPS == "stone" && pcSelectedSPS == "paper")
//   ) {
//     totalGames++;
//     myOutputValue = `You lose! You chose ${userinput_SPS},<br> PC chose ${pcSelectedSPS},<br>your win rate is ${calculateWinRate()}%`;
//   }
//   return currentGameModeStr + myOutputValue;
// };

// var game_mode_reverseSPS = function (userinput_SPS) {
//   var currentGameModeStr = "Current game mode is in reverseSPS! <br><br><br>";
//   var myOutputValue = "";
//   if (
//     userinput_SPS != "scissors" ||
//     userinput_SPS != "paper" ||
//     userinput_SPS != "stone"
//   ) {
//     myOutputValue = "Please enter scissors, paper, stone";
//   }
//   var pcSelectedNumber = randomNumberGen();
//   var pcSelectedSPS = numSPS2Str(pcSelectedNumber); //convert random gen-ed number to str

//   totalGames++;

//   if (
//     // Win conditions
//     (userinput_SPS == "scissors" && pcSelectedSPS == "paper") ||
//     (userinput_SPS == "paper" && pcSelectedSPS == "stone") ||
//     (userinput_SPS == "stone" && pcSelectedSPS == "scissors")
//   ) {
//     myOutputValue = `You lose! You chose ${userinput_SPS},<br> PC chose ${pcSelectedSPS}, <br>your win rate is ${calculateWinRate()}%`;
//   } else if (
//     // Draw conditions
//     userinput_SPS == pcSelectedSPS
//   ) {
//     myOutputValue = `Draw! You chose ${userinput_SPS},<br> PC chose ${pcSelectedSPS},<br>your win rate is ${calculateWinRate()}%`;
//   } else if (
//     (userinput_SPS == "scissors" && pcSelectedSPS == "stone") ||
//     (userinput_SPS == "paper" && pcSelectedSPS == "scissors") ||
//     (userinput_SPS == "stone" && pcSelectedSPS == "paper")
//   ) {
//     winGames++;
//     myOutputValue = `You win! You chose ${userinput_SPS},<br> PC chose ${pcSelectedSPS},<br>your win rate is ${calculateWinRate()}%`;
//   }
//   return currentGameModeStr + myOutputValue;
// };

// var main = function (input) {
//   var gameOutput = "";

//   // Check for game mode
//   if (input.trimEnd() == "SPS") {
//     currentGameMode = "SPS";
//   } else if (input.trimEnd() == "reverseSPS") {
//     currentGameMode = "reverseSPS";
//   }

//   if (currentGameMode == "waiting for user name") {
//     // set the name
//     userName = input;
//     // now that we have the name, switch the mode
//     gameOutput =
//       "Hello " +
//       userName +
//       "<br><br> Entering SPS, please enter game mode scissors paper Stone. Either SPS or reverseSPS!";
//   } else if (currentGameMode == "reverseSPS") {
//     gameOutput = game_mode_reverseSPS(input.trimEnd());
//   } else if (currentGameMode == "SPS") {
//     gameOutput = game_mode_SPS(input.trimEnd());
//   }
//   return gameOutput;
// };

var randomWordGen = function () {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 1 to 3 inclusive.
  var randomInteger = Math.floor(randomDecimal) + 1;
  if (randomInteger == 1) {
    return "banana";
  } else if (randomInteger == 2) {
    return "faucet";
  } else if (randomInteger == 3) {
    return "chisel";
  }
};

var randomNumberGen = function () {
  // Generate a decimal from 0 through 4, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 4;

  // Remove the decimal with the floor operation.
  // This will be an integer from 2 to 4 inclusive.
  var randomInteger = Math.floor(randomDecimal) + 2;
  return randomInteger;
};

var numWins = 0;
var previousWinRound = false;
var numWinsPerRound = randomNumberGen();

var main = function (input) {
  var gameOutput = "";
  var secretWord = randomWordGen();

  console.log(secretWord);
  secretWord = "baba";
  if (input == secretWord) {
    numWins++;
    gameOutput = `You win once! You guessed ${input}! secret phrase is ${secretWord} Number of wins needed to win round is ${
      numWinsPerRound - numWins
    }!`;
    previousWinRound = true;
  } else {
    previousWinRound = false;
    gameOutput = `You lose! You guessed ${input}! secret phrase is ${secretWord}`;
    numWins = 0;
  }

  if (numWins == numWinsPerRound && previousWinRound == true) {
    numWinsPerRound = randomNumberGen();
    gameOutput = `You wins the round! Huat ah! You guessed ${input}! secret phrase is ${secretWord} Number of wins next round is ${numWinsPerRound}`;
  }

  return gameOutput;
};
