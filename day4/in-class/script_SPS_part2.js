/// Hawker Food Randomness
var randomNumberGen = function () {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 1 to 3 inclusive.
  var randomInteger = Math.floor(randomDecimal) + 1;

  return randomInteger;
};

var winGames = 0;
var loseGames = 0;
var totalGames = 0;

var currentGameMode = "waiting for user name";
var userName = "";

var numSPS2Str = function (numberSPS) {
  var str_SPS = "";
  if (numberSPS == 1) {
    str_SPS = "scissors";
  } else if (numberSPS == 2) {
    str_SPS = "paper";
  } else if (numberSPS == 3) {
    str_SPS = "stones";
  }
  return str_SPS;
};

var calculateWinRate = function () {
  var winRate_str = (winGames / totalGames) * 100;
  winRate_str = Number(winRate_str).toFixed(2);
  return winRate_str;
};

var game_mode_SPS = function (userinput_SPS) {
  var myOutputValue = "";
  if (
    userinput_SPS != "scissors" ||
    userinput_SPS != "paper" ||
    userinput_SPS != "stone"
  ) {
    myOutputValue = "Please enter scissors, paper, stone";
  }
  var pcSelectedNumber = randomNumberGen();
  var pcSelectedSPS = numSPS2Str(pcSelectedNumber); //convert random gen-ed number to str

  totalGames++;

  if (
    // Win conditions
    (userinput_SPS == "scissors" && pcSelectedSPS == "paper") ||
    (userinput_SPS == "paper" && pcSelectedSPS == "stone") ||
    (userinput_SPS == "stone" && pcSelectedSPS == "scissors")
  ) {
    winGames++;
    myOutputValue = `You win! You chose ${userinput_SPS},<br> PC chose ${pcSelectedSPS}, <br>your win rate is ${calculateWinRate()}%`;
  } else if (
    // Draw conditions
    userinput_SPS == pcSelectedSPS
  ) {
    myOutputValue = `Draw! You chose ${userinput_SPS},<br> PC chose ${pcSelectedSPS},<br>your win rate is ${calculateWinRate()}%`;
  } else if (
    (userinput_SPS == "scissors" && pcSelectedSPS == "stone") ||
    (userinput_SPS == "paper" && pcSelectedSPS == "scissors") ||
    (userinput_SPS == "stone" && pcSelectedSPS == "paper")
  ) {
    myOutputValue = `You lose! You chose ${userinput_SPS},<br> PC chose ${pcSelectedSPS},<br>your win rate is ${calculateWinRate()}%`;
  }
  return myOutputValue;
};

var main = function (input) {
  var gameOutput = "";

  if (currentGameMode == "waiting for user name") {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    currentGameMode = "SPS";
    gameOutput =
      "Hello " +
      userName +
      "<br><br> Entering SPS, please enter scissors/paper/stone!";
  } else if (currentGameMode == "SPS") {
    gameOutput = game_mode_SPS(input);
  }
  return gameOutput;
};
