const prompt = require('prompt-sync')({sigint: true});

let toDoList = [];

let count = 0

let selection = 0

console.log("~ To-Do List App ~");

console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");

while (selection !== 3) {

    if (toDoList.length <= 0) {

        console.log("You have no items in your to-do list.");

    }

    console.log("*~ Make a selection ~*");

    console.log("[1] Create a to-do item");

    console.log("*or*");

    console.log("[2] Complete a to-do item");

    console.log("*or*");

    console.log("[3] Exit application.");

    let selection = Number(prompt("> "));

    if (selection !== 1 && selection !== 2 && selection !==3) {

        console.log("Error! Selection not valid. Please enter a valid selection.");

        console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");
    }

    if (selection === 3) {

        return console.log("Goodbye!");
        
    } 
    
}