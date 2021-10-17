function fun1(){
    number =5;
}

function fun2(){
    number = number +10;
}
//will set number as global due to hoisting
fun1();
//fun 2 will be called with 5
fun2(number);
console.log(number);

//O/p is 15

