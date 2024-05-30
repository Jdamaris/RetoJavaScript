const percentageForm = document.getElementById('percentageForm');

percentageForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const percentage = parseFloat(document.getElementById('percentage').value);
  const number = parseFloat(document.getElementById('number').value);

 
  if (isNaN(percentage) || isNaN(number)) {
    document.getElementById('result').innerText = 'Solo se permiten números.';
    return; 
  }

  
  let result;


  // Default calculation: X% of Y
  result = (percentage / 100) * number;

  
  const formattedResult = result.toFixed(0); 

  // Display result with clear labeling
  document.getElementById('result').innerText = `Resultado: ${formattedResult}`;
});

