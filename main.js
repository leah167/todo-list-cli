const prompt = require('prompt-sync')({sigint: true});

let toDoList = [];

let completed = [];

let toAdd = [];

let toComplete = [];

let status = [];

let count = 0

let selection = 0

// array[i] = "new value";

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

    if (selection === 1) {
        console.log("*~ Add an item to your to-do list ~*");

        console.log("What is the title of the item you wish to add?");

        let toAdd = prompt(">");

        toDoList.push(toAdd);

        // console.log(toDoList)

        console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");

        console.log("You have " + Number(toDoList.length) + " item(s) to do.");

        for (let count = 0; count < toDoList.length; count++) {
            
            completed[count] = false

            if (completed[count] === false) {

                status[count] = "[incomplete]"

            } else if (completed[count] === true) {
                
                status[count] = "[complete]"
            }


            console.log(Number(count + 1) + "." + status[count] + toDoList[count]);

            console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");
            
            
        }
        


    } 
    if (selection === 2) {

        console.log("*~ Mark a to-do item as completed! ~*");

        console.log("Which to-do item would you like to mark as completed?");

        let toComplete = Number(prompt(">"));

        console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");

        console.log("You have " + Number(toDoList.length) + " item(s) to do.");



        for (let count = 0; count < toDoList.length; count++) {

            

            // let toDo = toDoList[toComplete-1];

            completed[toComplete-1] = true

            // console.log(toDo);

            // let isComplete = completed[count];

            if (completed[count] === false) {

                status[count] = "[incomplete]"

            } else if (completed[count] === true) {
                
                status[count] = "[complete]"
            }

            console.log(Number(count + 1) + "." + [status[count]] + toDoList[count]);
            
        }
    }
    if (selection === 3) {

        return console.log("Goodbye!");
        
    } 
  

    


}
