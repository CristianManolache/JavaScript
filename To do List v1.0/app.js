///////////////ToDo v1.0

let toDoList = [];

//Create a function which add items in the array through the prompt(user) pop up!
function addItem(arr){
    let answer = prompt("What would you like to do today?");
    let correct = answer.toLocaleLowerCase().trim();

    if(checkDuplicate(arr,correct)) {
        arr.push(correct);
     }else {
         alert("Item already existing , will be not added!")
     }

}
//Create a function that check if is a duplicate item in the array and not adding!
function checkDuplicate (arr,item) {
    let uniqueValue = false; //Default
    let index = arr.indexOf(item) //Check the items in the array
    console.log(index);
    if(index != -1){
        uniqueValue = false;
    }else {
        uniqueValue = true;
    }
    return uniqueValue;
}
//Remove item

function removeItem(list) {
    let answer = prompt("Which item would you like to delete from the list");
    let correct = answer.trim().toLowerCase();
    let index = list.indexOf(correct);

    if(!checkDuplicate(list,correct)) {
       let removedItem = list.splice(index,1);
       console.log(removedItem);
       alert(`Your removed "${removedItem}" from your list.`);
    }else {
        console.log("No such value exists!");
    }


addItem(toDoList);
addItem(toDoList);
addItem(toDoList);
//removeItem(toDoList)
console.log(toDoList);
