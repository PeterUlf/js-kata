"use strict";

// create a function called `mockify` that receives a string, 
// and returns a mocified version of that string.


function mockify(myString = this) {
    const letters = Array.from(myString);
    const arrayLength = letters.length;
    const myNewStringArray = [];
    let newLetter = "";
    for (var i = 0; i < arrayLength; i++) {
        //alert(letters[i]);
        //Do something


        newLetter = letters[i].toLowerCase();

        if (Math.random() > 0.5) {
            //alert("greater than zero");
            newLetter = newLetter.toUpperCase();
        }
        myNewStringArray.push(newLetter);



    }
    return myNewStringArray.join("");


}

String.prototype.mockify = mockify;
console.log(mockify('This is a test'));
