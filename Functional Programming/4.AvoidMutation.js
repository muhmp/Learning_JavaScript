/**Avoid Mutations and Side Effects Using Functional Programming */
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  return fixedValue+1;
  // Only change code above this line  
}
var newValue = incrementer(); //5
console.log(fixedValue)//4var anotherValue = incrementer(fixedValue); //equal 5
console.log(fixedValue)//print 5