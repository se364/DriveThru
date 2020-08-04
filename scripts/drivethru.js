/*
 * Author: Shah Emran
 * Date : 11/20/2019
 * Learing Practice: Drive Thru
 */


//TODO: Set up a variable to hold the order total
let Total = 0;
// TODO: Add EventListeners to each image element
const images = document.getElementsByTagName("img");
for(let i = 0; i<images.length; i++)
{
        images[i].addEventListener('mouseover', addBorder);
}

for(let i = 0; i<images.length; i++)
{
        images[i].addEventListener('mouseout', removeBorder);
}
//alters the elements class name to add the CSS border styling
function addBorder()
{
    this.className = 'border';
  
}
//alters the elements class name to remove the CSS border styling.
function removeBorder()
{
    this.className = 'noBorder';
}
//TODO: Create a list item from the clicked image element and add it to the unordered list.
//the total is also updated and displayed in the <h3> element.
for (let i = 0; i<images.length; i++)
{
        images[i].addEventListener("click", 
                placeOrder);
}


function placeOrder(e)
{
    // text contains the alt text for  the image that was clicked
    let text = e.target.alt;
    const textElement = document.createElement('li');
    textElement.textContent = text;
    orders.appendChild(textElement);
    Total++;
    console.log(e);
    
    total.innerHTML = "Total : $" +Total.toFixed(2);
}
