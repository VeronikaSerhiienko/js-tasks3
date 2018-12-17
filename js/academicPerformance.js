var academicPerformance = {
  anna : 29,
  misha : 35,
  stepan : 1,
  elena : 99
};

showTheBestAcademicPerfomance(academicPerformance);

function showTheBestAcademicPerfomance(obj) {
  var studentName;
  var theBestAcademicPerfomance= -Infinity;
  for (var key in obj) {
    if (obj[key] > theBestAcademicPerfomance) {
      theBestAcademicPerfomance = obj[key];
      studentName = key;
    }
  }
  console.log("Student with the best academic performance " + studentName.slice(0,1).toUpperCase() + studentName.slice(1).toLowerCase()  + " : " + theBestAcademicPerfomance);
}