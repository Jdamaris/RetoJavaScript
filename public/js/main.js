const percentageForm = document.getElementById('percentageForm');

percentageForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop default form submission

  const percentage = parseFloat(document.getElementById('percentage').value);
  const number = parseFloat(document.getElementById('number').value);

  // Validate inputs (handle non-numeric values)
  if (isNaN(percentage) || isNaN(number)) {
    document.getElementById('result').innerText = 'Solo se permiten números.';
    return; // Exit the function if inputs are invalid
  }

  // Calculate percentage based on scenario (optional enhancement)
  let result;
  // Add logic here to handle different calculation scenarios if needed

  // Default calculation: X% of Y
  result = (percentage / 100) * number;

  // Format result (avoid unnecessary checks)
  const formattedResult = result.toFixed(0); // Always format with 2 decimal places

  // Display result with clear labeling
  document.getElementById('result').innerText = `Resultado: ${formattedResult}`;
});

