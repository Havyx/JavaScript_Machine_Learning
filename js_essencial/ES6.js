/* let name = "jonh";
const ano = 1990;
name = "jow";
console.log(name); */
//--------------------------------------------------------------------------------
//es5
function asd5(passou) {
  if (passou) {
    var nome = "jonh";
    var ano = 1990;
  }
  console.log(nome + " " + ano);
}

asd5(true);
//--------------------------------------------------------------------------------
//es6
function asd6(passou) {
  let nome;
  const ano = 1990;

  if (passou) {
    nome = "jonh";
  }
  console.log(nome + " " + ano);
}

asd6(true);

let i = 23;

for (i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);
//--------------------------------------------------------------------------------
//IIFE es5

/* (function() {
    var c = 3;
})();
console.log(c); */
//IIFE es6
{
  const a = 1990;
  let b = "222";
  var c = 3;
}
console.log("Strings");

//-------------------------------------------------------------------------------------

let nome = "jonh";
let sobre = "doe";
const ano = 1990;

function calcano(anoNasc) {
  return 2020 - anoNasc;
}

console.log(` this is ${nome} ${sobre}. Tem ${calcano(ano)} `);

const n = `${nome} ${sobre}`;
console.log(n.startsWith("j"));
console.log(n.includes("on"));

//-----------------------------------------------------------------------------------------

const anos = [1990, 1987, 1999, 1988];
const anos666 = [1966, 1967, 1699, 1986];
//ES5
var ano5 = anos.map(function(el) {
  return 2020 - el;
});

console.log(ano5);

//ES6
let ano6 = anos.map(el => 2020 - el);
console.log(ano6);

anos6 = anos.map((el, index) => `ano ${index + 1}: ${2020 - el}`);
console.log(anos6);

years6 = anos666.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `O ano ${index + 1}: ${age}`;
});

console.log(years6);
//---------------------------------------------------------------------------------------------
//ES5
/* var box5 = {
  cor: "verde",
  posicao: 1,
  clickMe: function() {
    var self = this;
    document.querySelector(".green").addEventListener("click", function() {
      var str = "Essa caixa de numero " + self.posicao + " e cor " + self.cor;
      alert(str);
    });
  }
};
box5.clickMe(); */

//ES6
const box6 = {
  cor: "verde",
  posicao: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {
      var str = `Essa caixa de numero  ${this.posicao} e a cor é ${this.cor}`;
      alert(str);
    });
  }
};
box6.clickMe();
/* 
const box6 = {
  cor: "verde",
  posicao: 1,
  clickMe: () => {
    document.querySelector(".green").addEventListener("click", () => {
      var str = `Essa caixa de numero  ${this.posicao} e a cor é ${this.cor}`;
      alert(str);
    });
  }
};
box6.clickMe(); */

//----------------------------------------
//CLASS ES5
/* function Person(name) {
  this.name = name;
}
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " e amigo de " + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ["Bobo", "jane", "June"];
new Person("Jonh").myFriends5(friends); */
//----------------------------------------

//CLASS ES6

function Person(name) {
  this.name = name;
}
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(el => `${this.name} e amigo de ${el}`);
  console.log(arr);
};

var friends = ["Bobo", "jane", "June"];
new Person("Mikeh").myFriends5(friends);

//___________________________________________________________________________________
//ARRAY

const boxes = document.querySelectorAll(".box");

/* var boxesArr5 = Array.prototype.slice.call(boxes);
console.log(boxes);
//ES5
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = "dodgerblue";
});

//ES6
Array.from(boxes).forEach(cur => (cur.style.backgroundColor = "dodgerblue"));
 */
//ES5
/* for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === "box blue") {
    continue;
  }

  boxesArr5[i].textContent = "Alterado para azul";
} */

//ES6
for (const cur of boxes) {
  console.log(cur.className);
  if (cur.className.includes("blue")) {
    cur.style.backgroundColor = "black";
    cur.textContent = "Im black";
  }
}

const variaveis = [12, 15, 64, 23, 54];

indice = variaveis.findIndex(cur => cur > 50);
valor = variaveis.find(cur => cur < 16);

console.log(indice + " " + valor);
//=========================================================
//SPRED OPERATOR
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}
console.log(addFourAges(18, 23, 23, 12));
//es5
var fdf = [128, 23, 12, 23, 23];
var sum2 = addFourAges.apply(null, fdf);
console.log(sum2);

//ES6
const sum3 = addFourAges(...fdf);
console.log(sum3);

const h = document.querySelector("h1");
console.log(h);
const boxxx = document.querySelectorAll(".box");
const all = [h, ...boxxx];
console.log(all);

Array.from(all).forEach(cur => (cur.style.color = "purple"));
