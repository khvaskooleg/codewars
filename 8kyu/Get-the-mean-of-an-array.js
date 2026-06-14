// Description:
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// function getAverage(marks){
//   //TODO : calculate the downward rounded average of the marks array
// }

function getAverage(marks){
let mean = 0;
  for (let i = 0; i < marks.length; i++) {
    mean = mean + marks[i]
  }
  return Math.round(mean / marks.length);
}

let result = getAverage([2, 2, 3, 2]);
console.log(result)
