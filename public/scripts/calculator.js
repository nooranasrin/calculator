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

const storeNumber = function() {
  const number = event.target.innerText;
  sendPOSTRequest('/saveNumber', { number });
};

const performCalculation = function() {
  sendPOSTRequest('/saveOperator', { operator: event.target.innerText });
};

const showCalculationResult = function() {
  sendGETRequest('/performCalculation');
};

const clear = function() {
  sendGETRequest('/clearResult');
};
