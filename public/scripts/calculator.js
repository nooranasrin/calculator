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

const performCalculation = () => {
  const operator = event.target.innerText;
  const number = +document.querySelector('#resultDisplay').innerText;
  sendPOSTRequest('/saveOperator', { operator, number });
};

const showCalculationResult = () => sendGETRequest('/performCalculation');

const getPercentage = function() {
  const number = +document.querySelector('#resultDisplay').innerText;
  sendPOSTRequest('/percentage', { number });
};

const convertIntoOppositeNum = () => {
  const number = +document.querySelector('#resultDisplay').innerText;
  sendPOSTRequest('/convertIntoOppositeNum', { number });
};
