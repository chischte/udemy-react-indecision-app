"use strict";

console.log('app.js is running!');
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}; // JSX JavaScript XML

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options' : 'No options', " "));
var count = 0;

var addOne = function addOne() {
  console.log('addOne');
};

var minusOne = function minusOne() {
  console.log('minusOne');
};

var reset = function reset() {
  console.log('reset');
};

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
  onClick: addOne
}, "+1"), /*#__PURE__*/React.createElement("button", {
  onClick: minusOne
}, "-1"), /*#__PURE__*/React.createElement("button", {
  onClick: reset
}, "reset"));
console.log(templateTwo);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
