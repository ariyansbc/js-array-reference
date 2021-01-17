//Return an array of all the values in the ages array that are 18 or over:
var ages = [26, 14, 87,50,10,30];

var ageUnderEighteen = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}
console.log(ageUnderEighteen);

//Return an array of all the values in the numbers array that are 30 or above:

var numbers = [50, 30, 20, 15 , 36, 45,12,60,90];
var numAbove = numbers.filter(checkNumber) 
 
function checkNumber(num) {
    return num <= 30;
}
console.log(numAbove);