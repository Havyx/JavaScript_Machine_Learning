
// Javascrip hit line below (Anonymus function) its called  because of the operator ()
//IIFE Function (privada para o usuario nao ter acesso aos dados como x and add)

// 3 MODULOS -> Module Pattern

var budgetController = (function(){
    //PRIVADO variaves sao declaradas e retornam objeto
    var x = 23;

    var add = function (a){
        return  x +a;
    }
    //CLOSURES return o objeto publico
    return {
        //Because of closures inner function always have acccess to the variables eand parameters of the outer function,
        //does matter if outer function already return X and add sao acessados pelo closure criado.
        publicTest: function(b){
            return add(b);
        }
    }
})();

var UIController = (function(){

    //some code

})();

//Na annonymos function usa nome diferetentes das outras funcoes IIFE como boa pratica cado o nome do modulo mude
var controle = (function(budgetCtrl, UICtrl){

    var z = budgetCtrl.publicTest(5);
    //como nao temos acesso, criamos um metodo publico com Closure 
    return {
        anotherPublic: function(){
            console.log(z)
        }
    }

})(budgetController, UIController);

