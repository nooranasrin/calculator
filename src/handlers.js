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
  res.json({ result });
};

const saveOperator = function(req, res, next) {
  const { operator } = req.body;
  const result = req.calculator.saveOperator(operator);
  res.json({ result });
};

const performCalculation = function(req, res, next) {
  const result = req.calculator.performCalculation();
  res.json(result);
};

const clearResult = function(req, res, next) {
  req.app.locals.calculator = new Calculator();
  res.json({ result: 0 });
};

module.exports = {
  saveNumber,
  createCalculator,
  provideCalculator,
  saveOperator,
  performCalculation,
  clearResult
};
