# Rock-Paper-Scissors
Rock-Paper-Scissors is a JavaScript-based console application that allows a user to play against the computer. The project uses conditional logic, functions, variables, and random number generation to determine the winner of each round and track game results.

## planning
So before we start to code lets plan our pseudocode, but before we do that we have to ask ourselves this questions? is our project need right now a GUI? no. is we have to create an empty HTML page and link the JS file to it? That is the best way to do it. so first step is to create an empty repo in github, then adding the files that I will need and in my case I will need only index.html and main.js

## Pseudocode:

1. create a **function** called **getComputerChoice**, it will return randomly the 3 options (Rock, Paper, Scissors). I'll declare a variable that generate random numbers. now to do this Math.random() return randomly the value between 0 and 1, but it never return 1, and to be able to get an integer numbers only i have to use Math.floor this will make the number with floating value look like this 1.93 --> 1. and I have to add + 1 to this statement so rather than the function will return 0 it will return 1. then I've to multiply this by 3 because I only have 3 options, and I have to create if else statement 1 for rock, 2 for paper, and 3 for scissors.

2. create anther **function** called **getHumanChoice**, the function work like this... I've to take from the user input by prompt, like 1, 2, or 3. and 1 === Rock, 2 === Paper, 3 === Scissors. and I've to make the variable that take the human choice, then I will do an if else statement that take the user input and return the value depending on what the user choose.
so I spent a lot of time to fix it tell i ask the TOP communities on discord and someone help me by providing me a hint about data type and it was about changing the result of the prompt rather than string to numbers by using Number().

3. create a new function called **playRound** that takes the both first and second functions as an arguments, we create a variable inside the function that take the words like("Rock", "RoCK", "rOcK") and return the it all lowercased and then we create a long if else statement that take the human choice and computer choice and compare it to see who win!. then we set 2 variable called (humanSelection, computerSelection) to set them for the parameters and then we call them.

4. create the big boss function **playGame** and add inside it the playRound function and the 2 variables (human and computer scores), and then we call the playRound function 5 times, and in the end if human has bigger score than computer we print "YOU Win!" and if it's the opposite we print "You Lose!".

### why writing this code matter?

I've learned a lot beside declaring a variable and doing if else statement, like functions are'nt about create them only by this simple, you have to understand **(scope)**, I think it's the most important one, and start building something by your own hands are much way better than only reading documentation.