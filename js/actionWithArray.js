var testArray = [43, 23, 57, 54, 60, 41, 10, 60, 23, 47, 60, 12, 59];
var shuffledArray = shuffleElem(testArray);
var testArray2 = [1, 2, 3, 4];
var allSubArrays = getSubArrays(testArray2);
var testArray3 = [1, -2, 3, 4, -9, 6];

var sumOfArraysElem = testArray.reduce(function(sum, current) {
  return sum + current;
});

console.log("Array : " + testArray + "\nShuffled array : " + shuffledArray);
showMaxElemOfArray(testArray);
console.log(allSubArrays);
console.log("Sum of array's elements : " + sumOfArraysElem);
getSubArrayWithMaxSum(testArray3);

function shuffleElem(array) {
  ar = array.slice(0); 
  for (var i = ar.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = ar[i];
    ar[i] = ar[j];
    ar[j] = temp;
  }
  return ar;
}

function showMaxElemOfArray(array) {
  maxElemOfArray = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElemOfArray) {
      maxElemOfArray = array[i];
    }
  }
  console.log("The best result is " + maxElemOfArray);
}

function getSubArrays(array) {
  var subArrays = [];
  for (var i = 0; i < array.length; i++) {   
    for (var j = i; j < array.length; j++) {   
      subArrays.push(array.slice(i, j + 1));
    }
  }
  return subArrays;
}

function getSubArrayWithMaxSum(array) {
  var maxSum = -Infinity;
  var result;
  for (var i = 0; i < array.length; i++) {   
    for (var j = i; j < array.length; j++) { 
      var subArray =  array.slice(i, j + 1);
      var sumSubArray = subArray.reduce(function(sum, current) { 
        return sum + current;
      });
      if (sumSubArray > maxSum) { 
        maxSum = sumSubArray;
        result = subArray.slice(0);
      }
    }
  }
  console.log("Maximum sum of array is: " + maxSum + " Subarray with maximum sum is : " + result);
}