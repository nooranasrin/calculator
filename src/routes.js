const express = require('express');
const app = express();
const handlers = require('./handlers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', handlers.createCalculator);
app.use(express.static('public'));
app.use(handlers.provideCalculator);
app.post('/saveNumber', handlers.saveNumber);
app.post('/saveOperator', handlers.saveOperator);
app.get('/performCalculation', handlers.performCalculation);
app.get('/clearResult', handlers.clearResult);
app.post('/convertIntoOppositeNum', handlers.convertIntoOppositeNum);

module.exports = app;
