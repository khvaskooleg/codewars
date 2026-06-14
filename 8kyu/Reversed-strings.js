// Description:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  let array = Array.from(str);
  let newArray = []
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  let newStr = newArray.join('')
  return newStr;
}