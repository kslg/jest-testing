/**
 * @jest-environment jsdom
 */

// a bit that we want to test, it's the paragraph with the ID of "par".
 const buttonClick = require("../button");

 beforeAll(() => {
     document.body.innerHTML = "<p id='par'></p>";
 });
 
 describe("DOM tests", () => {
     test("Expects content to change", () => {
         buttonClick();
         // And what we're going to do is get the inner  HTML of our element with the ID of "par"  
         //and we're going to say that we expect  that to now equal "you clicked".
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
 });