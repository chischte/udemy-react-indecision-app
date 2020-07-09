class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age =age;
  }
  getGreeting() {
    //return 'Hi. I am ' + this.name + '!';
    return `Hi, I am ${this.name} test!`
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person("Haudis Popolino", 22);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());
