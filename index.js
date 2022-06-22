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
    /*What is the Difference Between textContents, innerText, and innerHtml?
    - textContent is all text contained by an element and all its children that are for formatting purposes only.
    - innerText returns all text contained by an element and all its child elements.
    - innerHtml returns all text, including html tags, that is contained by an element.*/
    /*
    1. The innerHTML property sets and returns the content of an element with new HTML content.
    console.log(document.getElementById('blog-test').innerHTML);
    This element is <strong>strong</strong> and   has some super fun <code>code</code>!

    2. The innerText property returns the content of all elements, except for <script> and <style> elements.
        console.log(document.getElementById('blog-test').innerText);
        This element is strong and has some super fun code!

    3. The textContent property returns the raw content with styling inside of all elements, but excludes the HTML element tags. This includes <script> and <style> elements, whitespace, line breaks, and carriage returns.
        console.log(document.getElementById('blog-test').textContent);
        This element is strong and   has some super fun code!

    Note: Unlike innerHTML, textContent has better performance because its value is not parsed as HTML. 
    For that reason, using textContent can also prevent Cross-Site Scripting (XSS) attacks. 
    Unlike innerText, textContent isn't aware of CSS styling and will not trigger a reflow. 
    All Node objects have textContent, whereas only HTMLElement objects have innerText. */

    savePassengers.innerText = "Previous passengers: ";
    let strIncrementos = incrementos.join(" - "); 
    savePassengers.textContent += " " +strIncrementos;
    counterEl.textContent = 0;
    counter = 0;
    
    
}

