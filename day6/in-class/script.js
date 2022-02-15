var squareDrawer = function (dimension) {
  var outer_counter = 0;
  var inner_counter = 0;
  var printOut = "";

  while (outer_counter < dimension) {
    while (inner_counter < dimension) {
      printOut += "✨";
      inner_counter += 1;
    }
    printOut += "<br>";
    outer_counter += 1;
    inner_counter = 0;
  }
  return printOut;
};

var squareDrawer2Layers = function (dimension) {
  var outer_counter = 0;
  var inner_counter = 0;
  var printOut = "";

  while (outer_counter < dimension) {
    // Rows to write
    while (inner_counter < dimension) {
      if (
        outer_counter == 0 ||
        outer_counter + 1 == dimension ||
        inner_counter == 0 ||
        inner_counter + 1 == dimension
      ) {
        //If first or last row, only write stars
        printOut += "✨";
      } else {
        printOut += "🐱‍🐉";
      }
      inner_counter += 1;
    }
    printOut += "<br>"; //After populating each row, add \n
    outer_counter += 1; // Go to next counter
    inner_counter = 0; //Reset row count, later rewrite from start
  }
  return printOut;
};

var squareDrawer2LayersWithCenter = function (dimension) {
  var outer_counter = 0;
  var inner_counter = 0;
  var printOut = "";

  while (outer_counter < dimension) {
    while (inner_counter < dimension) {
      if (outer_counter == 0 || outer_counter + 1 == dimension) {
        printOut += "✨";
      } else if (inner_counter == 0 || inner_counter + 1 == dimension) {
        printOut += "✨";
      } else if (
        dimension % 5 == 0 &&
        inner_counter * 2 + 1 == dimension &&
        outer_counter * 2 + 1 == dimension
      ) {
        printOut += "🐱‍👤";
      } else {
        printOut += "🐱‍🐉";
      }
      inner_counter += 1;
    }
    printOut += "<br>";
    outer_counter += 1;
    inner_counter = 0;
  }
  return printOut;
};

var triangleDrawerRightAngle = function (dimension) {
  var outer_counter = 0;
  var inner_counter = 0;
  var printOut = "";
  var counter = 0;
  while (outer_counter < dimension) {
    counter += 1;
    while (inner_counter < counter) {
      printOut += "✨";
      inner_counter += 1;
    }
    printOut += "<br>";
    outer_counter += 1;
    inner_counter = 0;
  }
  return printOut;
};

// var triangleDrawerIso = function (dimension) {
//   var blanks = " ";
//   var stars = "✨";

//   var outer_counter = 0;
//   var inner_counter = 0;
//   var printOut = "";
//   var counter = 0;
//   while (outer_counter < dimension) {
//     counter += 1;
//     while (inner_counter < counter) {
//       printOut += "✨";
//       inner_counter += 1;
//     }
//     printOut += "<br>";
//     outer_counter += 1;
//     inner_counter = 0;
//   }
//   return printOut;
// };

var main = function (input) {
  var myOutputValue = "";

  myOutputValue = squareDrawer(input);
  //myOutputValue = squareDrawer2Layers(input);
  // Return output value.
  return myOutputValue;
};
