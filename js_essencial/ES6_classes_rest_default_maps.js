// REST PARAMETERS

//ES5
function isFullAge5() {
  //console.log(arguments);
  //nao transforma automaticamente em array
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= 18);
  });
}

//isFullAge5(1990, 1245, 2123);

//ES6
function isFullAge6(...anos) {
  variavel = [];
  // ... transforma autmoaticamente os argumentos em array
  anos.forEach(ano_atual => variavel.push(2020 - ano_atual));
  console.log(anos);
  console.log(variavel);
}
isFullAge6(1990, 1245, 2123);

//=============================================================================
//DEAFAULT PARAMETERS

/* function SmithPerson(fn, yb, ln, na) {
  ln === undefined ? (ln = "Smith") : (ln = ln);
  na === undefined ? (na = "Brazileiro") : (na = na);
  (this.fn = fn), (this.ln = ln), (this.yb = yb);
  this.na = na;
}
var jonh = new SmithPerson("Jon");
var emily = new SmithPerson('Emily', 'Diz', 1988)
 */

//ES6
function SmithPerson(fn, yb, ln = "Smith", na = "American") {
  (this.fn = fn), (this.ln = ln), (this.yb = yb);
  this.na = na;
}

var jonh = new SmithPerson("Jon");
var emily = new SmithPerson("Emily", "Diz", 1988);
//============================================================================

//MAPS
const question = new Map();
question.set(
  "question",
  "Qual e o nome oficial da maior versao de JavaScript?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set("answer", 2);
question.set(true, "Correct Answer");
question.set(false, "WRONG!");

console.log(question.get("question"));

/* if (question.has(4)) {
  question.delete(4);
}
question.clear();
 */

question.forEach(element => {
  console.log(element);
  if (element === 3) {
    console.log(`O elemento 3 esta aqui ${element}`);
  }
});

for (let [key, value] of question.entries()) {
  if (key === 1) {
    console.log(`O elemento ${key} esta aqui e e ${value}`);
  }
}

for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(` LEGAL! ${key}`);
  }
  if (typeof key === "string") {
    console.log(` LEGAL! ${key}`);
  }
}

//const ans = parseInt(prompt("Write correct Answer."));
//console.log(question.get(ans === question.get("answer")));

//=============================================================================================
//CLASSES

//ES5
/* var Pessoa5 = function(nome, ano_nasc, trabalho) {
  (this.nome = nome), (this.ano_nasc = ano_nasc), (this.trabalho = trabalho);
};

Pessoa5.prototype.calcIdade = function() {
  var idade = new Date().getFullYear - this.ano_nasc;
  console.log(idade);
};

var savio5 = new Pessoa5("Savio", 1987, "IA specialist");
savio5.calcIdade(); */

//ES6 CLASSES
//Not Hoisted, need to declare and then use it

class Person6 {
  constructor(nome, ano_nasc, trabalho) {
    this.nome = nome;
    this.ano_nasc = ano_nasc;
    this.trabalho = trabalho;
  }
  calcula_idade() {
    //console.log(Date().getFullYear);
    //this.data_atual = new Date().getFullYear();
    var idade = new Date().getFullYear() - this.ano_nasc;
    console.log(idade);
  }
  static ajuda() {
    console.log("Ola a todos");
  }
}

const savio6 = new Person6("Savio", 1987, "AI Specialis");
savio6.calcula_idade();
//Person6.ajuda();

//ES6 Subclass

class Programdor6 extends Person6 {
  constructor(nome, ano_nasc, trabalho, qte_linguagens, formacao) {
    super(nome, ano_nasc, trabalho);
    this.linguagens_qtde = qte_linguagens;
    this.formacao = formacao;
  }
  aprendeLinguagem() {
    this.linguagens_qtde++;
    console.log(
      `${this.nome} aprendeu uma nova linguagem e agora sabe ${this.linguagens_qtde} linguagens`
    );
  }
}

const savioProgramador6 = new Programdor6(
  "Savio",
  1987,
  "Ai_specialist",
  3,
  "Eng. Mec."
);

savioProgramador6.aprendeLinguagem();
savioProgramador6.calcula_idade();
