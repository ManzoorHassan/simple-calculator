#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your first Number", type: "number", name: "firstNumber" },
    { message: "enter your second Number", type: "number", name: "secondNumber" },
    { message: "setect one of operators to perform action", type: "list", name: "operator", choices: ["addition", "subtraction", "multiplication", "division"] }
]);
//conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    "please correct operator";
}
