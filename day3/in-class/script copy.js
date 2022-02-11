var getRandomInteger = function (max) {
  // Generate a decimal from 0 through max + 1.
  // This decimal will be inclusive of 0 and exclusive of max + 1.
  var randomDecimal = Math.random() * (max + 1);

  // Remove the decimal with the floor operation.
  // The resulting integer will be from 0 through max, inclusive of 0 and max.
  var resultInteger = Math.floor(randomDecimal);

  return resultInteger;
};

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

/**
 * Instructions:
 * Each function represents 1 exercise. Uncomment 1 function
 * at a time and comment out all others to execute the code
 * for the relevant exercise.
 */

var checkIfWithin_1 = function (userinput, dicenum1, dicenum2) {
  if (
    userinput == dicenum1 ||
    userinput == dicenum2 ||
    userinput + 1 == dicenum1 ||
    userinput + 1 == dicenum2 ||
    userinput - 1 == dicenum1 ||
    userinput - 1 == dicenum2
  ) {
    return true;
  } else {
    return false;
  }
};

var snakeEye_Check = function (userinput, dicenum1, dicenum2) {
  if (dicenum1 == 1 && dicenum2 == 1) {
    return true;
  } else return false;
};

var main = function (input) {
  // Generate a random dice number
  if (Number.isNaN(Number(input)) == true || input == "" || input == null) {
    return "Please enter a valid number";
  }

  var randomDice1_Number = rollDice();
  var randomDice2_Number = rollDice();
  var userGuessedNumber = Number(input);
  var myOutputValue = "";
  console.log(typeof randomDiceNumber, typeof userGuessedNumber);
  var winlog = `You Win! You rolled ${userGuessedNumber}, dicenumer1 = ${randomDice1_Number}, dicenumer2 = ${randomDice2_Number}`;
  var loselog = `You Lose! You rolled ${userGuessedNumber}, dicenumer1 = ${randomDice1_Number}, dicenumer2 = ${randomDice2_Number}`;

  var condition_within_1 = checkIfWithin_1(
    userGuessedNumber,
    randomDice1_Number,
    randomDice2_Number
  );
  var condition_snakeeye = snakeEye_Check(
    userGuessedNumber,
    randomDice1_Number,
    randomDice2_Number
  );

  if (condition_within_1 && !condition_snakeeye) {
    myOutputValue = "Condition 3! " + winlog;
  } else if (condition_within_1 || condition_snakeeye) {
    myOutputValue = "Condition 4! " + winlog;
  } else {
    myOutputValue = loselog;
  }

  // // If input matches randomDiceNumber, update output.
  // if (input == randomDiceNumber) {
  //   myOutputValue = "you win!";
  // }

  // Return output.
  return myOutputValue;
};
