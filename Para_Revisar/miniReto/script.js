// Capturar el formulario y los elementos relevantes
const form = document.getElementById('calculator-form');
const billInput = document.getElementById('bill');
const tipSelect = document.getElementById('tip');
const resultDiv = document.getElementById('result');
const billAmountSpan = document.getElementById('bill-amount');
const tipPercentageSpan = document.getElementById('tip-percentage');
const tipAmountSpan = document.getElementById('tip-amount');
const totalAmountSpan = document.getElementById('total-amount');
const tota = document.getElementById('total2-amount');
const hola = document.getElementById('bill2');
// Escuchar el evento 'submit' del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  // Validar los valores ingresados3+
  const bill2 = parseFloat(hola.value);
  const bill = parseFloat(billInput.value);
  const tipPercentage = parseFloat(tipSelect.value);
  
  if (isNaN(bill) || isNaN(bill2) || isNaN(tipPercentage) || bill <= 0 || bill2 <= 0) {
    alert('Por favor, ingresa valores numéricos válidos para el monto de la cuenta y el porcentaje de propina.');
    return;
  }
  
  // Calcular la propina y el monto total
  const tipAmount = bill * tipPercentage;
  const totalAmount = bill + tipAmount;
  const pedazo = totalAmount/bill2
  
  // Mostrar los resultados
  billAmountSpan.textContent = bill.toFixed(2);
  tipPercentageSpan.textContent = (tipPercentage * 100).toFixed(0) + '%';
  tipAmountSpan.textContent = tipAmount.toFixed(2);
  totalAmountSpan.textContent = totalAmount.toFixed(2);
  tota.textContent = pedazo.toFixed(2);
  
  resultDiv.classList.remove('hidden');
});
