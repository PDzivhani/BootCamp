// var x = 5;
// var a = 1;
// var c = 5;
// var w;


// function myFun(){

//     y = x * 2;

//     console.log("The function multiplies variable by 2")
//     console.log(y)
    
// }
// myFun()
// console.log(x)

// //with parameters and return value
// function test1(a,b)
// {
//     return a*b;
// }
// let z = test1(12, 4)

// console.log(z)

// //function used in expressions
// const o = function(p1, p2) 
// {
//     return p1 + p2;
// }
// let t = o(3, 4)
// console.log(t)

// function myFunction(b)
// {
//     w =3
//     return b = x*10;
    
// }
// //calling function
// console.log(myFunction(a));

// function myArgument(e, k){
//     return arguments.length; // returnss number of arguments
// }
// myArgument(4,3)

function sum(...rest){
    let sum = 0
    for(let rests of rest){
        sum += rests
    }
    return sum
}
let m = sum(3,4,3 , 5, 4)