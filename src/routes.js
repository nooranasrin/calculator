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

module.exports = app;
