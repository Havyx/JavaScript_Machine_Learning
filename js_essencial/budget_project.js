//Budget controller
var budgetController = (function() {
  //comeca com maisculo a class / construtor
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  };
  return {
    addItem: function(type, des, val) {
      var newItem;
      if (data.allItems[type].lenght > 0) {
        ID = data.allItems[type][data.allItems[type].lenght - 1].id + 1;
      } else {
        ID = 0;
      }
      if (type == 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type == 'inc') {
        newItem = new Income(ID, des, val);
      }
      data.allItems[type].push(newItem);
      return newItem;
    },
  };
})();

//UI
var UIController = (function() {
  var DOMstrings = {
    input_type: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.input_type).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    addListItem: function(obj, type) {
      var html, newHtml, element;

      if (type == 'inc') {
        element = DOMstrings.incomeContainer;
        html =
          '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type == 'exp') {
        element = DOMstrings.expensesContainer;
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);

      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    getDOMstrings: function() {
      return DOMstrings;
    },
  };
})();

//Global APP controle -> diz os outros modulos o que fazer get and set outros controles
var controle = (function(budgetCtrl, UICtrl) {
  var seturpEventListeners = function() {
    //quando voce passa uma funcao como argumeto nao coloca () pois () e para executar(callback function)
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    // Global listenning e -> its event

    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || event.which == 13) {
        ctrlAddItem();
      }
    });
  };
  var DOM = UICtrl.getDOMstrings();
  //for DRY principles
  var ctrlAddItem = function() {
    //1. get filed input data
    var input = UICtrl.getInput();
    //2. add item to budget controll
    var new_item = budgetCtrl.addItem(
      input.type,
      input.description,
      input.value
    );
    //3. user interface get new item
    //4. calculate budget
    //5. display the budget
    console.log(input);
  };

  return {
    init: function() {
      console.log('Iniciado...'), seturpEventListeners();
    },
  };
})(budgetController, UIController);

controle.init();
