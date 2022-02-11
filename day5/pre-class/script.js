// Store guesses in a global array that persists across Submits.

var guesses = [];

var rollDice = function () {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 1 to 3 inclusive.
  var randomInteger = Math.floor(randomDecimal) + 1;

  return randomInteger;
};

var main = function (input) {
  // Add the user's guess to the guesses array.
  guesses.push(input);
  // Generate a random dice number.
  var randomDiceNumber = rollDice();
  // Initialise output to communicate loss.
  // Output the record of all guesses regardless of loss or win.
  // var myOutputValue = "You lose. Your guesses: " + guesses;
  // // If the guess matches the dice roll, change output to communicate win.
  // if (randomDiceNumber == input) {
  //   myOutputValue = "You win. Your guesses: " + guesses;
  // }
  var myOutputValue = "";
  var loop_counter = 0;
  var innerCounter = 0;
  while (loop_counter < 3) {
    loop_counter += 1;
    myOutputValue += "| Hello ";
    innerCounter = 0;
    while (innerCounter < 3) {
      innerCounter += 1;
      myOutputValue += "hello ";
    }
  }

  // Return output value.
  return myOutputValue;
};
