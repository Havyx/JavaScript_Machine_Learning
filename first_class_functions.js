var years = [1990, 1965, 1937, 2001, 1998];
console.log(years);

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}
function calculeAge(el) {
  return 2020 - el;
}

var ages = arrayCalc(years, calculeAge);
console.log(ages);

//Function that return fuction

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you explain what UX design is?  ");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log((name = " what do you teach?"));
    };
  }
}

var designerquestion = interviewQuestion("designer");

designerquestion("jonh");

var teacherquestion = interviewQuestion("teacher");

teacherquestion("paul");
