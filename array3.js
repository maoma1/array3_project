
//start by creating an array of numbers. and then use the sort() method to arrange in order of increasing value.

const myArray = [-3,8,7,6,5,-4,3,2,1];

/*however when you use the sort method without the compare function, the -3 come before the -4, which is wrong
 and so the compare function is used so that it places a higher value on the less negative number
 */


 function sortArray(arr) {
     return arr.sort( function compElements (a,b) {
 
         if (a > b) return 1;
     if (a < b) return -1;
     return 0;
 
     })
 }
  console.log(sortArray(myArray))
 
 