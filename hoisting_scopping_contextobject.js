///////////////////////////////////////
// Hoisting

//function declaration
calcular(1965);
//54
function calcular(year) {
  console.log(2019 - year);
}

/* retirement(1990); */
//funcion expression
var retirement = function(year) {
  console.log(65 - (2020 - year));
};

console.log(age);
//undefined
var age = 23;
console.log(age);
//23

function foo() {
  var age = 65;
  console.log(age);
}

foo();
console.log(age);
//65

var a = "Var a";
//scopping
function escop_chain() {
  console.log(a);
  //Var a
  var b = "Var b";
  escop();
  function escop() {
    console.log(a + b);
    //Var aVar b
  }
}

escop_chain();

// this window object
console.log(this);
//Window {parent: Window, opener: null, top: Window, length: 0, frames: Window,

/* calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
} */
//Window {parent: Window, opener: null, top: Window, length: 0, frames: Window,

var issoeumobjeto = {
  name: "Savio",
  yearofbirth: 1987,
  calculateAge: function() {
    console.log(this);
    //{name: "savio", yearofbirth: 1987, calculateAge: ƒ}
    console.log(2020 - this.yearofbirth);
    function innerFunc() {
      console.log(this);
      //Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
    }
    innerFunc();
  }
};
issoeumobjeto.calculateAge();
//{name: "savio", yearofbirth: 1987, calculateAge: ƒ}

var susy = {
  name: "Suzy",
  yearofbirth: 1990
};
susy.calculateAge = issoeumobjeto.calculateAge;

susy.calculateAge(1900);
//{name: "Suzy", yearofbirth: 1990, calculateAge: ƒ}
