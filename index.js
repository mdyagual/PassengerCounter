//change value setted on h2 tag
//document.getElementById("count-el").innerText=5;
/*TO READ: WHAT IS DOCUMENT OBJECT? */

/* FIRST TO DO
1. Initialize the count as 0
2. Listen for clicks on the increment button (onclick)
3. Increment the count variable when the button is clicked
4. Change the count-el in the HTML to reflect the new count */

//Access to the element with the id described
let counterEl = document.getElementById("count-el");
let counter = 0;

//Making the function to the onclick event
function increment(){
    counter++;
    //Set counting to the element on the html tag
    counterEl.innerText = counter;
}