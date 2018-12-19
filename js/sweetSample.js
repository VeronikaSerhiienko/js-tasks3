var sweetSample = [43, 23, 57, 54, 60, 41, 10, 60, 23, 47, 60, 12, 59];
var maxResult;

showMessageAboutEachResult(sweetSample);
showSamplesWithTheBestResult(sweetSample, maxResult);

function showMessageAboutEachResult(array) {
  maxResult = sweetSample[0];
  for (var i = 0; i < array.length; i++) {
    console.log("sample " + (i + 1) + " - result " + array[i]);
    if (array[i] > maxResult) {
      maxResult = array[i];
    }
  }
  console.log("All samples are " + array.length);
  console.log("The best result is " + maxResult);
}

function showSamplesWithTheBestResult(array, elem) {
  var samplesWithTheBestResult = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elem) { 
      samplesWithTheBestResult.push(i + 1);
    }
  }
  console.log("Samples with the best result are on places " + samplesWithTheBestResult);
}