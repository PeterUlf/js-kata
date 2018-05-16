"use strict";

// create a function called `mockify` that receives a string, 
// and returns a mocified version of that string.


function mockify(myString) {
    const letters = Array.from(myString);
    var arrayLength = letters.length;
    let myNewStringArray = [];
    let newLetter = "";
    for (var i = 0; i < arrayLength; i++) {
        //alert(letters[i]);
        //Do something


        newLetter = letters[i].toLowerCase();

        if (Math.random() > 0.5) {
            newLetter = newLetter.toUpperCase();
        }
        myNewStringArray.push(newLetter);



    }
    console.log(myNewStringArray.join(""));

}


console.log(mockify('This is a test'));
