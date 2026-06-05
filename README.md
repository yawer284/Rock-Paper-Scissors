# Rock-Paper-Scissors
Rock-Paper-Scissors is a JavaScript-based console application that allows a user to play against the computer. The project uses conditional logic, functions, variables, and random number generation to determine the winner of each round and track game results.

# planning
So before we start to code lets plan our pseudocode, but before we do that we have to ask ourselves this questions? is our project need right now a GUI? no. is we have to create an empty HTML page and link the JS file to it? That is the best way to do it. so first step is to create an empty repo in github, then adding the files that I will need and in my case I will need only index.html and main.js

# Pseudocode:

create a **function** called **getComputerChoice**, it will return randomly the 3 options (Rock, Paper, Scissors). I'll declear a variable that generate random numbers. now to do this Math.random() return randomly the value between 0 and 1, but it never return 1, and to be able to get an intger numbers only i have to use Math.floor this will make the number with floting value look like this 1.93 --> 1. and I have to add + 1 to this statement so rather than the function will return 0 it will return 1. then I've to multiply this by 3 because I only have 3 options, and I have to create if else statment 1 for rock, 2 for paper, and 3 for scissors.

create anther **function** called **getHumanChoice**, the function work like this... I've to take from the user input by prompet, like 1, 2, or 3. and 1 === Rock, 2 === Paper, 3 === Scissors. and I've to make the variable that take the human choice, then I will do an if else statement that take the user input and return the value depanding on what the user choose.
so I spent a lot of time to fix it tell i ask the TOP communite on discord and someone help me by providing me a hint about data type and it was about the Strict equality === i have to change it to == to accpet strings and numbers.

create a new function called **playRound** that takes the both first functions as an arguments
