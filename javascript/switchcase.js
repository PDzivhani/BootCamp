//Simple calculator using JS and switch case

//We need this library module to accept user input
const prompt = require('prompt-sync')();

let results;
//accept the operator input
const operator = prompt('Enter operator (either +, -, *, or /): ');

//accepts a operand input
const num1 = parseFloat(prompt('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));

switch (operator) {
    //Formular for addition
    case '+':
        results = num1 + num2;
        console.log(`${num1} + ${num2} = ${results}`);
        break;
    //formular for subtraction
    case '-':
        results = num1 - num2;
        console.log(`${num1} - ${num2} = ${results}`);
        break;
    //formula for multiplication
    case '*':
        results = num1 * num2;
        console.log(`${num1} * ${num2} = ${results}`);
        break;
    //formula for division
    case '/':
        results = num1 / num2;
        console.log(`${num1} / ${num2} = ${results}`);
        break;

    default:
        console.log("Operator undefined");
        
    
    
}