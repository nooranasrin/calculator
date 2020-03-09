const Calculator = require('./calculator');

const createCalculator = function(req, res, next) {
  const calculator = new Calculator();
  req.app.locals = { calculator };
  next();
};

const provideCalculator = function(req, res, next) {
  req.calculator = req.app.locals.calculator;
  next();
};

const saveNumber = function(req, res, next) {
  const { number } = req.body;
  const result = req.calculator.saveNumber(+number);
  res.send({ result });
};

const saveOperator = function(req, res, next) {
  const { operator } = req.body;
  const result = req.calculator.saveOperator(operator);
  res.send({ result });
};

module.exports = {
  saveNumber,
  createCalculator,
  provideCalculator,
  saveOperator
};
