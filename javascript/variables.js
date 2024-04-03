let greetings = "Welcome to FS";
let times = 4;

//Block Scope
if (times < 5) {
    let greetings = "Hi there instead";
    
}
//End of block scope
console.log(greetings)
