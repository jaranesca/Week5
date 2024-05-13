"use strict";

window.onload = function() {

    //Name of Fuction, prefrix INIT to indicate this is the first thing to Do
    initLoadDropdownGiftIdeas()
}
function initLoadDropdownGiftIdeas() {
        // load the dropdown list
      //  let states = ["Alabama", "Alaska", "Arizona", ... ];



        let giftIdeas = ["A house", "A vacation", "A rose", "A photoalbum"];
        let giftValues = ["Gift1","Gift2","Gift3","Gift4"];

   

        //Grab the list from HTML
        const giftList = document.getElementById("giftIdeas");
        let amoutOfGifts = giftIdeas.length;
        for (let i = 0; i < amoutOfGifts; i++) {
        // create the option element
        let theOption = document.createElement("option");
        // set the text and value of the option you created
        theOption.textContent = giftIdeas[i]; 
        theOption.value = giftValues[i]; 
        // append the option as a child of (inside) the 
        // select element

       // ADDing the elements to the list 
       giftList.appendChild(theOption);
        }

        }
<select id="giftIdeas" name="giftIdeasNames" size="4">
             
               </select>