let value = 30;
function myfun (num1, num2){
    let result = num1 + num2 + value;
    return  result;
}
console.log(value);
console.log (result); //can not access from outside of the function block..
console.log(myfun(3,4));