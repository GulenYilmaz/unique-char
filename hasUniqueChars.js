// Write your code below

// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true

function hasUniqueChars(str){
    let wordArray =str.split('');
    let status= true;
    for (let i =0; i< wordArray.lenght;i ++){
        for (let j=i+1; j<wordArray.lenght; j ++){
            if(wordArray[i]=== wordArray[j]){
           status = false;
           return status;
            }
        }
    }
    return status;
}
console.log(hasUniqueChars("Monday"))
