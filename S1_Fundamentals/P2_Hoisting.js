// ======== Hoisting
// 1. Hoisting is a mechanism in which variables are hoisted with undefined value and functions are hoisted with their complete implementation.And After memory creation phase code execution phase starts in which code is executed from top to bottom.
// ======= Arrow Function / Function expression
// 1. Arrow function & function expression are treated as variables that means undefined value is stored instead of the function implementation.
// 2. After declaration we can invoke these as a function but before declaration it will be treated as variable and can’t be invoked

console.log(name);
console.log(fn1);
console.log(fn2);
console.log(fn3);
fn1();
// fn2();      //will throw error as not a function
// fn3();      //will throw error as not a function

//variable
var name = "Anonymous";
//function
function fn1() {
  console.log("function - fn1");
}
//arrow function
var fn2 = () => {
  console.log("function - fn2");
};
//function expression
var fn3 = function () {
  console.log("function - fn3");
};
console.log(name);
console.log(fn1);
console.log(fn2);
console.log(fn3);
fn1();
fn2();      //will throw error as not a function
fn3();      //will throw error as not a function