const add = (firstNumber, secondNumber) => firstNumber + secondNumber;

const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;

const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

class Calculator {
  constructor() {
    this.firstNumber = '';
    this.secondNumber = '';
    this.lastOperator;
    this.operator;
  }

  saveNumber(num) {
    if (!this.operator) {
      return (this.firstNumber += num);
    }
    return (this.secondNumber += num);
  }

  saveOperator(operator) {
    if (this.lastOperator) {
      this.firstNumber = this.performCalculation();
    }
    this.lastOperator = this.operator ? this.operator : operator;
    this.operator = operator;
    this.secondNumber = '';
    return this.firstNumber;
  }

  updateNumber(number, calculationResult) {
    return number === this.firstNumber
      ? (this.firstNumber = calculationResult)
      : (this.secondNumber = calculationResult);
  }

  getPercentage(number) {
    const percentage = +number / 100;
    return this.updateNumber(number, percentage);
  }

  convertIntoOppositeNum(number) {
    return this.updateNumber(number, `${-number}`);
  }

  performCalculation() {
    const operations = { '+': add, '-': subtract, '×': multiply, '÷': divide };
    const operation = operations[this.operator];
    return operation(+this.firstNumber, +this.secondNumber);
  }
}

module.exports = Calculator;
