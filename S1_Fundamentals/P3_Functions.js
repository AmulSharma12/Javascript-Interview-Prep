//How function works in JS?
// As previous discussion when function is invoked Global execution context is created & pushed
// to the call stack
//It will first search for variable in local scope and if its not found it will check to the parent scope


var num = 18;
this.printNum();
this.printRandomNum();
console.log(num);

function printNum(){
    // var num = 45;   //on commenting 18 18 will print
    console.log(num);
}

function printRandomNum(){
    var num = 81;
    console.log(num);
}