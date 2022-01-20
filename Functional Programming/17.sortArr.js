/**
 * Sort an Array Alphabetically using the sort Method
 */

 function alphabeticalOrder(arr) {
    // Only change code below this line
  
  // use a “compare function” as the callback function of the sort method.
    return arr.sort(function (a,b){
      return a === b ? 0 : a < b ? -1 : 1;
    });
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));