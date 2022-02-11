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

//// Lucky 11
// var main = function (input) {

//   var randomDice1_Number = rollDice();
//   var randomDice2_Number = rollDice();
//   var userGuessedNumber = Number(input);
//   var myOutputValue = "";
//   console.log(typeof randomDiceNumber, typeof userGuessedNumber);

//   // console.log(typeof randomDice1_Number);
//   // randomDice1_Number = 5;
//   // randomDice2_Number = 6;
//   var winlog = `You Win! You rolled ${userGuessedNumber}, dicenumer1 = ${randomDice1_Number}, dicenumer2 = ${randomDice2_Number}`;
//   var loselog = `You Lose! You rolled ${userGuessedNumber}, dicenumer1 = ${randomDice1_Number}, dicenumer2 = ${randomDice2_Number}`;
//   if (
//     input == randomDice1_Number ||
//     input == randomDice2_Number ||
//     randomDice2_Number + randomDice1_Number == 11
//   ) {
//     myOutputValue = winlog;
//   } else {
//     myOutputValue = loselog;
//   }

//   // // If input matches randomDiceNumber, update output.
//   // if (input == randomDiceNumber) {
//   //   myOutputValue = "you win!";
//   // }

//   // Return output.
//   return myOutputValue;
// };

//// Hawker Food Categorisation

// var main = function (input) {
//   var myOutputValue =
//     "Please enter chicken rice, nasi lemak, laksa, hokkien mee, prata or bak kut teh";

//   if (input == "chicken rice" || input == "nasi lemak") {
//     myOutputValue = "The dish has rice";
//   } else if (input == "laksa" || input == "hokkien mee") {
//     myOutputValue = "The dish has noodle";
//   } else if (input == "roti prata" || input == "bak kut teh") {
//     myOutputValue = "The dish neither rice or noodle. Other base!";
//   }
//   return myOutputValue;
// };

//// 4D with Single-Digit Comparison

// var randomNumberGen = function () {
//   // Generate a decimal from 0 through 9, inclusive of 0 and exclusive of 6.
//   var randomDecimal = Math.random() * 9;

//   // Remove the decimal with the floor operation.
//   // This will be an integer from 0 to 9 inclusive.
//   var randomInteger = Math.floor(randomDecimal);

//   return randomInteger;
// };

// var main = function (input) {
//   // Generate a random dice number
//   if (Number.isNaN(Number(input)) == true || input == "" || input == null) {
//     return "Please enter a valid number";
//   }

//   var randomNumber_1 = randomNumberGen();
//   var randomNumber_2 = randomNumberGen();
//   var randomNumber_3 = randomNumberGen();
//   var randomNumber_4 = randomNumberGen();

//   var userGuessedNumber = Number(input);
//   var myOutputValue = "";

//   // console.log(typeof randomDice1_Number);
//   // randomDice1_Number = 5;
//   // randomDice2_Number = 6;
//   var winlog = `You Win! You guessed ${userGuessedNumber}, RandomNumber1 = ${randomNumber_1}, RandomNumber2 = ${randomNumber_2}, RandomNumber3 = ${randomNumber_3}, RandomNumber4 = ${randomNumber_4}`;

//   var loselog = `You lose! You guessed ${userGuessedNumber}, RandomNumber1 = ${randomNumber_1}, RandomNumber2 = ${randomNumber_2}, RandomNumber3 = ${randomNumber_3}, RandomNumber4 = ${randomNumber_4}`;

//   myOutputValue = loselog;
//   if (
//     input == randomNumber_1 ||
//     input == randomNumber_2 ||
//     input == randomNumber_3 ||
//     input == randomNumber_4
//   ) {
//     myOutputValue = winlog;
//   }

//   // Return output.
//   return myOutputValue;
// };

/// Hawker Food Randomness
var randomNumberGen = function () {
  // Generate a decimal from 0 through 9, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 6 inclusive.
  var randomInteger = Math.floor(randomDecimal) + 1;

  return randomInteger;
};

var main = function (input) {
  var myOutputValue =
    "Please enter chicken rice, nasi lemak, laksa, hokkien mee, prata or bak kut teh";
  var randomDishNumber = randomNumberGen();

  // 1/2: chicken rice" ||"nasi lemak"
  // 3/4: input == "laksa" || input == "hokkien mee";
  // 5/6: input == "roti prata" || input == "bak kut teh"

  var userSelectDishNumber = 0;
  if (input == "chicken rice") {
    userSelectDishNumber = 1;
  } else if (input == "nasi lemak") {
    userSelectDishNumber = 2;
  } else if (input == "roti prata") {
    userSelectDishNumber = 3;
  } else if (input == "laksa") {
    userSelectDishNumber = 4;
  } else if (input == "hokkien mee") {
    userSelectDishNumber = 5;
  } else if (input == "bak kut teh") {
    userSelectDishNumber = 6;
  }

  if (userSelectDishNumber == randomDishNumber) {
    myOutputValue = `You are correct! You chose ${input}`;
  } else if (userSelectDishNumber != randomDishNumber) {
    myOutputValue = `You are wrong =( You chose ${input})`;
  }

  return myOutputValue;
};
