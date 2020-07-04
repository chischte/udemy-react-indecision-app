console.log('app.js is running!');


// JSX JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
    </div>
);

var templateTwo = (
    <div>
        <h1>Haudi Gaudi</h1>
        <p>Age: 1024</p>
        <p>Location: Here</p>
    </div>
);

var appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot);

