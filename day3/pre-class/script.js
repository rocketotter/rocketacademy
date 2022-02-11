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

var main = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  var userGuessedNumber = parseInt(input);
  var myOutputValue = "";
  console.log(typeof randomDiceNumber, typeof userGuessedNumber);

  if (userGuessedNumber > 3) {
    myOutputValue = `You entered ${userGuessedNumber}, please input less than 4`;
  } else if (userGuessedNumber * 2 == randomDiceNumber) {
    myOutputValue = "you win!";
  } else {
    // Default output value is 'you lose'.
    myOutputValue = `You entered ${input}, random number is ${randomDiceNumber} ! You lose!`;
  }

  // // If input matches randomDiceNumber, update output.
  // if (input == randomDiceNumber) {
  //   myOutputValue = "you win!";
  // }

  // Return output.
  return myOutputValue + `Previous number = ${userGuessedNumberPrevious}`;
};
