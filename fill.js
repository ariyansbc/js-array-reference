//Fill all the array elements with a static value:
var numbers = [24,15,44,56,78];
var num  = numbers.fill(11);
console.log(num);

function myName() {
    var arr = ['akash' , 'suhel' , 'mahfuz', 'jamila'];

    var nameArray = arr.fill("jalal")

    return nameArray;
}
var fillname = myName();
console.log(fillname);
