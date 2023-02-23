
const prompt = require(`prompt-sync`)({signt: true});
console.log(`\n`);
console.log(`| TO DO LIST MANAGER | \n`)
console.log(`-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n`);
console.log(`  | Wachu gone do?`);
console.log(`[1] Create a to-do item`);
console.log(`[2] Complete a to-do item`);
console.log(`[3] Get me out of here!`);

let init = Number(prompt(`> `));
console.log(`\n`);

let toDoList = [];
let statusArray = [];

while(init !== 3){

    if(init === 1){
        console.log(`CREATING ITEM \n`);
        console.log(`What is it? I can't wait!`);

        let newItem = prompt(`> `);
        console.log(`\n`);

        while(newItem.length === 0 || newItem.length === ` `){
            console.log(`Was that an oopsie? Try again with an actual item!`);

            newItem = prompt(`> `);
        }

        toDoList.push(newItem);
        statusArray.push(false);

        displayList();
        toDo();

    }else if(init === 2){

        if(toDoList.length !== 0){
            console.log(`ITEM COMPLETION \n`);
            console.log(`You finally did it! Wait... What did you do?\n`);

            displayList();

            let newStatus = Number(prompt(`> `));
            console.log(`\n`);
            statusArray[newStatus-1] = (true);

            displayList();
            toDo();
        }else{
            console.log(`It's quite empty here. You Have nothing to do.`);
            console.log(`Come back and visit once you create a task! \n`)
            toDo();
        }

    }else{
        console.log(`That was weird... Why did you do that? \n`);
        console.log(`Please make a correct selection. \n`);

        toDo();

        init = Number(prompt(`> `));
        console.log(`-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n`);
        console.log(`\n`);

    }

}

console.log(`-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n`);
console.log(`Okay. Bye... \n`);

function toDo(){
    console.log(`-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n`);
    console.log(`  | Wachu gone do?`);
    console.log(`[1] Create a to-do item`);
    console.log(`[2] Complete a to-do item`);
    console.log(`[3] Get me out of here!`);

    init = Number(prompt(`> `));
    console.log(`\n`);
}

function displayList(){
    if(toDoList.length === 0){
        console.log(`You have nothing to do today! \n`);
    }else if(toDoList.length < 1 || toDoList.length > 1){
        console.log(`You have ${toDoList.length} tasks to do, Lazybones! \n`);
    }else if(toDoList.length === 1){
        console.log(`You have ${toDoList.length} task to do, Lazybones! \n`);
    }

    for(let i = 0;i < toDoList.length; i++){
        let status = "";

        if(statusArray[i] === false){
            status = "[Incomplete]";
        }else if(statusArray[i] === true){
            status = "[Completed]";
        }

        console.log(`${i+1}. ${status} ${toDoList[i]}`);
    }
}