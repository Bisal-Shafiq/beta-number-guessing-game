#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user inut with computer gererated number and show resut
const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessingNumber",
        type: "number",
        message: "please guess a number between 1 - 10:",
    },
]);
if (answer.userGuessingNumber === randomNumber) {
    console.log("Congratulations you guessed right Number.");
}
else {
    console.log("Your guessed wrong number.");
}
