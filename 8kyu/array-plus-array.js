// Description:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2) {
//   return arr1 + arr2; //something went wrong
// }

function arrayPlusArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i]
  }
  return sum; //something went wrong
}