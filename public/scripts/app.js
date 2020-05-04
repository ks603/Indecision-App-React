"use strict";

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (number) {
      return number * _this.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
