const user = {
  name: 'Andy',
  cities: ['Bern', 'Rome', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((currentNumber) => currentNumber * this.multiplyBy);
  }
};

console.log(multiplier.multiply());