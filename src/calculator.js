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
    if (this.operator) {
      this.lastOperator = this.operator;
    }

    this.operator = operator;
    return this.firstNumber;
  }

  getPercentage(number) {
    return this.firstNumber / 100;
  }

  convertIntoOppositeNum(number) {
    return (this.firstNumber = `${-number}`);
  }

  performCalculation() {
    const operations = { '+': add, '-': subtract, '×': multiply, '÷': divide };
    const operation = operations[this.operator];
    const result = operation(+this.firstNumber, +this.secondNumber);
    this.operator = null;
    this.secondNumber = '';
    this.firstNumber = '';
    return { result };
  }
}

module.exports = Calculator;
