"use strict";

var user = {
  name: 'Andy',
  cities: ['Bern', 'Rome', 'Dublin'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};
console.log(user.printPlacesLived());
var multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (currentNumber) {
      return currentNumber * _this2.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
