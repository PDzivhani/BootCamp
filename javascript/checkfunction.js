
let prompt = require("prompt-sync")();

/* lets write a program that will check if the user 
 is old enough to access the site */

function checkAge(age)
{
    if(age >= 18){
        return true
    }
    else {
        return console.log("You dont have permission from your parents")
    }    
} 

let age = prompt("How old are you? ", 18)
    if(checkAge(age))
    {
        console.log("Access is granted")
        showMovie()
    }
    else
    {
        console.log("Access is denied!!!!")
    }

function showMovie(){
    let d = 100; // duration timer
    let i = 0; // counter for countdown
    for(i = 100000; i > d; i--) // simulating movie time while it plays
    {
        console.log("access is granted");
        console.log("Playing a movie times", i)



        
    }

}
