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
}

module.exports = Calculator;
