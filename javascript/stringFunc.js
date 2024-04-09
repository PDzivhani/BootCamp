let userName = "Stacy";
let message = "Welcome, ";
let text = ''
let from = ""


function sendMsg(){
    let message = "Welcome, " + userName;
    console.log(message)
}
sendMsg() // always call / initialize the variable in order to get return values

function showMessage(){
    userName = "Thando";
    console.log(message, userName)
}
showMessage()
console.log(message, userName)

function sendMsg(from, text){
    from = "Anonymous, ";
    text = "Welcome to my online learnership, send 500"
    return from + text
}
console.log(sendMsg(from, text))