/**
 * using test method
 */
 let myString = "Hello, World!";
 let myRegex = /Hello/;
 let result = myRegex.test(myString);// Change this line
 console.log(result); //check


 /**
  * Match literal strings
  */
  let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
  let waldoRegex = /Waldo/; // Change this line
  let result = waldoRegex.test(waldoIsHiding);