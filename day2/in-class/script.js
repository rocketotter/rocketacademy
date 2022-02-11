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
  var numOfHalfBarrelPerQ = numOfHalfBarrelPerDay * numOfDaysPerQuarter;
  return numOfHalfBarrelPerQ;
};
/*
input: GB used per month
output: per GB $
*/

var costPerGB = function (numOfGB) {
  var gbPerPlan = 50;
  var numOfPlanPurchased = Math.ceil(numOfGB / gbPerPlan);
  var totalCost = numOfPlanPurchased * 19.99;
  var costPerGB = totalCost / numOfGB;
  return costPerGB;
};

/*
input: loan amt
output:
1. how much customer will pay back in total
2. interest
3. monthly installment

loan_duration=10years
*/

var customerLoanDetails = function (loanAmt) {
  var interestAPR = 3;
  var loanDurationYears = 10;
  var loanDurationMonths = loanDurationYears * 12;
  var totalLoanAndInterest = loanAmt;
};

/**
 * Instructions:
 * Each function represents 1 exercise. Uncomment 1 function
 * at a time and comment out all others to execute the code
 * for the relevant exercise.
 */
var main = function (input) {
  // return `Number Of Half Barrels needed is ${numOfHalfBarrelPerQuarter(
  //   input
  // ).toFixed(2)}`;

  return `Cost per GB = $ ${costPerGB(input).toFixed(2)}`;
};
