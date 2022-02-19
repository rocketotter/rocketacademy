var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var adjectives = ["action", "tested"];
var noun = ["TEST", "TEST2"];
var adverb = ["TEST", "TEST2"];
var word_list = [[""], [""], [""]];
var currentGameMode = "waiting for input";

var main = function (userinput) {
  var gameOutput = "";
  console.log(userinput);

  // Wait for user to type input
  if (userinput == "input") {
    currentGameMode = "input";
    gameOutput =
      "You have entered 'input' mode! Entering 'input' mode, please key your adjectives!";
  } else if (userinput == "create") {
    currentGameMode = "create";
    gameOutput =
      "You have entered 'create' mode! Entering 'create' mode, please click submit";
  }
  //Default game mode
  else if (currentGameMode == "waiting for input") {
    gameOutput = "Please enter a value mode! Either 'input' or 'create'.";
  }

  //If gamemode == input
  else if (currentGameMode == "input") {
    gameOutput = inputMode(userinput);
  } else if (currentGameMode == "create") {
    var randomAdj = adjectives[getRandomIndex(adjectives.length)];
    madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his <b> ${randomAdj} </b> wife.`;
    var myOutputValue =
      madLib + "<br><br><br> The list of words keyed previously <br>";

    for (var i = 0; i < adjectives.length; i++) {
      myOutputValue += adjectives[i] + "<br>";
    }
    return myOutputValue;
  }
  return gameOutput;
};

var inputMode = function (input) {
  var myOutputValue = "";
  if (input) {
    var list_words = input.split(" ");
    for (var j = 0; j < list_words.length; j++) {
      adjectives.push(list_words[j]);
    }
  }
  adjectives.push(input);
  return input;
};

var createMode = function (input) {
  madlib = "Please return enter your passage!";

  if (input) {
    madLib = input;
  }

  return madLib;
};

var madlibArray = [
  [
    `She asked ${adverb} for the ${noun} and when they were rude, she said ${exclamation} and hung up the ${adjectives} phone.`,
  ],
  [
    `It was a ${adjectives}, cold November day. I woke up to the ${adjectives} smell of {noun} roasting in the ${noun} downstairs.`,
  ],
];
