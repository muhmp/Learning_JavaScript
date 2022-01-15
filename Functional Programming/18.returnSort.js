/**Return a Sorted Array Without Changing the Original Array */
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

  //technique for sorting
  return [].concat(arr).sort(function(a,b){
    return a-b;
  })

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));