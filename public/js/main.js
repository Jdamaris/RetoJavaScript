const percentageForm = document.getElementById('percentageForm');
const percentageInput = document.getElementById('percentage');
const numberInput = document.getElementById('number');
const resultDiv = document.getElementById('result');

percentageForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const percentage = parseFloat(percentageInput.value);
  const number = parseFloat(numberInput.value);

  if (isNaN(percentage) || isNaN(number)) {
    alert('Please enter valid numbers.');
    return;
  }
  let result;
  if (percentageInput.placeholder === 'Calcula el') {
    result = (percentage / 100) * number;
 
  } else if (percentageInput.placeholder === 'Es qué % de') {
    if (number === 0) {
      result = 'Division by zero is not allowed.';
    } else {
      result = (percentage / number) * 100;
    }
  } else {
    console.error('Unexpected placeholder for percentage input.');
  }

  resultDiv.textContent = result.toFixed(0) ; 
});

percentageInput.addEventListener('focus', function() {
  percentageInput.placeholder = 'Calcula el'; 
});

