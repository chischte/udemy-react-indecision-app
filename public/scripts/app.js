"use strict";

console.log('app.js is running!'); // JSX JavaScript XML

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Indecision App"), /*#__PURE__*/React.createElement("p", null, "This is some info"));
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Haudi Gaudi"), /*#__PURE__*/React.createElement("p", null, "Age: 1024"), /*#__PURE__*/React.createElement("p", null, "Location: Here"));
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
