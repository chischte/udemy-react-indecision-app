"use strict";

console.log('app.js is running!'); // JSX JacaScript XML

var template = /*#__PURE__*/React.createElement("p", null, "This is JSX from app.js");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
