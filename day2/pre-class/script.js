var litresOfOrangeJuice = function (numOfGuests) {
  var numOfLitres = (numOfGuests * 90) / 1000;
  return numOfLitres;
};

var numberOfOrangesNeeded = function (numOfGuests) {
  var numOfOranges = numOfGuests * 4;
  return numOfOranges;
};

var numOfYearsToHug = function (numOfSecs) {
  var numOfHrsPerDay = 24 - 9;
  var numOfPplSG = 5.686 * 10 ** 6;
  var numOfDaysNeeded = (numOfPplSG * numOfSecs) / 3600 / numOfHrsPerDay;
  var NumOfYearsNeeded = numOfDaysNeeded / 365;
  return NumOfYearsNeeded;
};

var totalCost = function (dollarPerLitre) {
  var totalAreaPerRoom = 3 * 3;
  var NumOfWinsDoors = 6 + 8;

  var totalAreaWinAndDoors = NumOfWinsDoors * ((90 / 100) * (150 / 100));
  var totalArea = totalAreaPerRoom * 6 - totalAreaWinAndDoors;
  var totalPaintInLitre = (totalArea / 300) * 2;
  var totalCost = totalPaintInLitre * dollarPerLitre;
  return totalCost;
};

var speedToChiong = function (delayedInHours) {
  var maxTimeGivenInHrs = 2;
  var totalDistanceToToykoInKm = 200 * 2;
  var speedForT2 =
    totalDistanceToToykoInKm * (maxTimeGivenInHrs - delayedInHours);
  return speedForT2;
};

var test = function (test1) {
  var value = 1;
  var result = value + test1;
  var result2 = value * test1;
  return result;
};

/*
input = number of hours spent
output = number of days spend on app

max age = 82

assuming 2 hrs spent:
output_days = (HrsSpent *365 * 82)/24;

*/

var numberOfDaysWasted = function (numOfHrsSpentOnApp) {
  var maxAge = 82;
  var numOfDays = 365;
  var numOfHrsPerDay = 24;
  var numberOfDays =
    (numOfHrsSpentOnApp * numberOfDays * maxAge) / numOfHrsPerDay;
  return numberOfDays;
};
/*
input: num of guest
output: duration of ice machine needs to run

1 pound = 450 grams

each guest 2 drinks = 4*2 ice cubes
eacch ice cube = 1.5grams

total ice cubes needed = 4*2* numOfGuest
total weight of icecubes = totalIceCubes * 1.5

total time needed= (totalWeight/450)/5
*/

var numOfHrsToWait = function (numOfGuest) {
  var eachGuestIceCubes = 4 * 2;
};

/*input: avg customers per day
output: numofbarrels needed per quarter
*/

var numOfHalfBarrelPerQuarter = function (numOfCustomers) {
  var numOfHalfBarrelPerDay = (numOfCustomers * 2) / 124;
  var numOfDaysPerQuarter = 90;
  var numOfHalfBarrelPerQ = numOfBarrelPerDay * 90;
  return numOfHalfBarrelPerQ;
};

/**
 * Instructions:
 * Each function represents 1 exercise. Uncomment 1 function
 * at a time and comment out all others to execute the code
 * for the relevant exercise.
 */
var main = function (input) {
  //// Part 1
  // var volJuiceNeeded = litresOfOrangeJuice(input);
  // var orangesNeeded = numberOfOrangesNeeded(input);
  // var myOutputValue = `We need ${orangesNeeded} oranges to make ${volJuiceNeeded}Ls of juice for ${input} guests`;
  // return myOutputValue; //, numberOfOrangesNeeded(input);
  //// Part 2
  // var NumOfYears = numOfYearsToHug(input);
  // return `Number of years needed to hug everyone in SG = ${NumOfYears.toFixed(
  //   3
  // )} years !`;
  ////Part 3
  // return `Cost needed paint whole house = $ ${totalCost(input).toFixed(2)}`; //, numberOfOrangesNeeded(input);
  // //Part 4
  // if (input > 2) {
  //   return `GG la, how to catch up? Delayed ${input} hrs > 2hrs, Train 1 already reach liao la`;
  // } else {
  //   return `Train speed for T2 required is ${speedToChiong(input).toFixed(
  //     2
  //   )}kph after delayed ${input} hrs`;
  // }

  return test(input);
};
