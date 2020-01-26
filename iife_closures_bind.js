//IIFE

(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

var tam = 2;

(function(goodluck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodluck);
})(tam);

// ADVANCED -> CLOSURES

function retirement(retAge) {
  var a = " years left until retirement";
  return function(yearofbith) {
    var age = 2020 - yearofbith;
    console.log(retAge - age + a);
  };
}

var retirementUS = retirement(66);
retirementUS(1990);
retirement(66)(1990);

var retirementBR = retirement(120);
retirementBR(1990);
retirement(90)(1900);

//BIND

var jon = {
  name: "jon",
  age: 28,
  job: "teacher",
  presentation: function(style, timeofday) {
    if (style === "formal") {
      console.log(
        "Good " + timeofday + " Ladies and gentlemen! " + this.name + " !!!"
      );
    } else if (style === "friendly") {
      console.log("Hey, whats up");
    }
  }
};

jon.presentation("formal");

var emily = {
  name: "emily",
  age: 29,
  job: "teacher"
};

// Borrow method call, ou apply

jon.presentation.call(emily, "formal");

//BIND
var jonFriendly = jon.presentation.bind(jon, "formal");
jonFriendly("Morning");

var emilyFriendly = jon.presentation.bind(emily, "formal");
emilyFriendly("Morning");
