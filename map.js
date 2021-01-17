//return an array with the square root of all the values in the original array

var nums = [4, 9,16 ,25,49]
var squarRootValue = nums.map(Math.sqrt);

console.log(squarRootValue);

//Multiply every elements in the array with 10

var numbers = [10,11,5,6];
var newarry = numbers.map(myFunction);
function myFunction(num) {
    return num * 10;
}
console.log(newarry);

//Multiply every elements in the array with by the same array value

var numArray = [10,11,5,6];
var newNumarry = numArray.map(arrayFunction);
function arrayFunction(value) {
    return value * value;
}
console.log(newNumarry);

//get the fullname for each person in the array

var persons = [
    {firstname: "malcom", lastname: 'reynolds'},
    {firstname: 'keylee', lastname: 'freye'},
    {firstname:'jayne',lastname: 'cobb'}
]
var newarryPerson = persons.map(getFullname) ;
 function getFullname(item) {
     var fullname = [item.firstname,item.lastname].join(" ");
     return fullname;
 }
console.log(newarryPerson);



