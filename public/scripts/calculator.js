const showResult = function({ result }) {
  const resultDisplay = document.querySelector('#resultDisplay');
  resultDisplay.innerText = result;
};

const sendRequest = function(method, url, data) {
  fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(showResult);
};

const storeNumber = function() {
  const number = event.target.innerText;
  sendRequest('POST', '/saveNumber', { number });
};

const performCalculation = function() {
  sendRequest('POST', '/saveOperator', { operator: event.target.innerText });
};
