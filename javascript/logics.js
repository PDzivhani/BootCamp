//values , comparisons and are needed and neccessary for the logics in JS

var greetings = "Hello FS cohort"; //varible 1
const times = 5.1; // condition for comparison

//Block Scope
//False AND True = false
if (times == 5 && times > 5) {
    var greetings = "Hi person"; // variable 2
    
} else {
    console.log(greetings + ", The value is false")
}
//End of block scope

var hello = "Welcome note";

// FALSE OR TRUE = TRUE
if (times == 5 || times > 5) {
    hello = "Welcome to JavaScript";

    console.log(greetings + " : " + hello);
} else {
    console.log(hello + ", The value is false");
}

// NOT
if (times != 5.1){
    console.log(greetings + " : " + "Guesswork");
}else {
    console.log("I was right!!!!")
}



