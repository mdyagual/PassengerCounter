//change value setted on h2 tag
//document.getElementById("count-el").innerText=5;
/*TO READ: WHAT IS DOCUMENT OBJECT? */

/* FIRST TO DO
1. Initialize the count as 0
2. Listen for clicks on the increment button (onclick)
3. Increment the count variable when the button is clicked
4. Change the count-el in the HTML to reflect the new count */

//Access to the element with the id described
//The counter
let counterEl = document.getElementById("count-el");
let counter = 0;

//The text
let savePassengers = document.getElementById("save-el");

let incrementos = [];
//Making the function to the onclick event
function increment(){
    counter++;
    //Set counting to the element on the html tag
    counterEl.innerText = counter;
    
}

//Create a 'save' function which logs out the count when it's called
function save(){
    //console.log(counter);
    
    incrementos.push(counter);

    /*UPDATE FUNCTIONALITY
    1. Create a variable that contains both the count and the dash separator
    2. Render the variable in the saveEl using innerText
    IMPORTANT: Make sure to not delete the existing content of the paragraph */
    savePassengers.innerText = "Previous passengers: ";
    let strIncrementos = incrementos.join(" - "); 
    savePassengers.innerText += " " +strIncrementos;
    
    
}

