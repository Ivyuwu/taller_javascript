
let currentExpression = '';

function agregaNumero(number) {
  currentExpression += number;
  updateDisplay(currentExpression);
}

function agregaOperador(operator) {
  currentExpression += operator;
  updateDisplay(currentExpression);
}

function calcular() {
try {
  const result = eval(currentExpression);
  updateDisplay(result);
  currentExpression = '';
} catch (error) {
  update
  Display('Error');
  currentExpression = '';}
}

function limpiaPantalla() {
  currentExpression = '';
  updateDisplay('');
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}


var randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  var guess = document.getElementById('guess').value;

  if (guess == randomNumber) {
    document.getElementById('result').innerHTML = '¡Felicidades! ¡Has adivinado el número!';
  } else if (guess < randomNumber) {
    document.getElementById('result').innerHTML = 'El número es demasiado bajo. ¡Inténtalo de nuevo!';
  } else {
    document.getElementById('result').innerHTML = 'El número es demasiado alto. ¡Inténtalo de nuevo!';
  }
}


function checkNumbers() {
  var number1 = document.getElementById('number1').value;
  var number2 = document.getElementById('number2').value;
  var number3 = document.getElementById('number3').value;
  var number4 = document.getElementById('number4').value;
  var number5 = document.getElementById('number5').value;
  var number6 = document.getElementById('number6').value;

  var winningNumbers = [];
  while (winningNumbers.length < 6) {
    var randomNum = Math.floor(Math.random() * 41) + 1;
    if (!winningNumbers.includes(randomNum)) {
      winningNumbers.push(randomNum);
    }
  }

  var userNumbers = [parseInt(number1), parseInt(number2), parseInt(number3), parseInt(number4), parseInt(number5), parseInt(number6)];

  var matchedNumbers = userNumbers.filter(function(number) {
    return winningNumbers.includes(number);
  });

  var resultText = 'Los números sorteados son: ' + winningNumbers.join(', ');
  if (matchedNumbers.length === 6) {
    resultText += '<br>¡Felicidades! ¡Has ganado la lotería!';
  } else {
    resultText += '<br>Números acertados: ' + matchedNumbers.length;
}
document.getElementById('result').innerHTML = resultText;
}




function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  var listItem = document.createElement('li');
  listItem.className = 'list-group-item d-flex justify-content-between align-items-center mb-2';
  listItem.innerHTML = taskInput.value;

  var completeButton = document.createElement('button');
  completeButton.className = 'btn btn-success btn-sm';
  completeButton.innerHTML = 'Completado';
  completeButton.addEventListener('click', function() {
    listItem.classList.toggle('completed');
  });

  var deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm';
  deleteButton.innerHTML = 'Eliminar';
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(listItem);
  });

  var buttonGroup = document.createElement('div');
  buttonGroup.className = 'btn-group';
  buttonGroup.appendChild(completeButton);
  buttonGroup.appendChild(deleteButton);
  listItem.appendChild(buttonGroup);

  taskList.appendChild(listItem);

  taskInput.value = '';
}
  


function cal() {
  var run = document.getElementById("run").value;
  if (run.length !== 8 || isNaN(run)) {
    alert("Por favor, ingrese un RUT válido (sin puntos ni guión) de 8 dígitos.");
  } else {
    var total = 0;
    var factor = 2;
    for (var i = run.length - 1; i >= 0; i--) {
      total += parseInt(run.charAt(i)) * factor;
      factor = factor === 7 ? 2 : factor + 1;
    }
    var dv = 11 - (total % 11);
    document.getElementById("resultado").textContent = dv === 11 ? 0 : dv === 10 ? "K" : dv;
  }
}
