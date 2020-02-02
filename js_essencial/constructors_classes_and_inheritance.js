var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

//classe, aqui chamamos de construtor
var Person = function(name, yearOfBirth, job) {
  (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
};

//ihrreritence
Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth);
};

//instanciando
var jonh = new Person("Joe", 1990, "Teacher");

var jane = new Person("Jane", 1998, "secretaria");

var mark = new Person("Mark", 1988, "superhero");

jonh.calculateAge();
jane.calculateAge();
mark.calculateAge();
