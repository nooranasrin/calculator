const showResult = function({ result }) {
  const resultDisplay = document.querySelector('#resultDisplay');
  resultDisplay.innerText = result;
};

const sendPOSTRequest = function(url, data) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(showResult);
};

const sendGETRequest = function(url) {
  fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(showResult);
};

const clearCalculatorDisplay = () => sendGETRequest('/clearResult');

const storeNumber = () =>
  sendPOSTRequest('/saveNumber', { number: event.target.innerText });

const performCalculation = () =>
  sendPOSTRequest('/saveOperator', { operator: event.target.innerText });

const showCalculationResult = () => sendGETRequest('/performCalculation');

const getPercentage = function() {
  let number = +document.querySelector('#resultDisplay').innerText;
  sendPOSTRequest('/percentage', { number });
};

const convertIntoOppositeNum = () => {
  let number = +document.querySelector('#resultDisplay').innerText;
  sendPOSTRequest('/convertIntoOppositeNum', { number });
};
