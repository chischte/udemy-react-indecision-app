import React from "react";
import ReactDOM, { render } from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class OldSyntax { // Without babel plugin "transform-class-properties"
    constructor(){
        this.getGreeting=this.getGreeting.bind(this);
        this.name= 'Mike';
    }
    getGreeting(){
        return `Hi. My name is ${this.name}`;
    }
}

const oldSyntax= new OldSyntax();
const getGreeting=oldSyntax.getGreeting;
console.log(getGreeting());

//----------

class NewSyntax{
    name= 'jen';
    getGreeting=()=> {
        return `Hi. My name is ${this.name}`;

    }

}

const newSyntax=new NewSyntax;
console.log(newSyntax);
const newGetGreeting=newSyntax.getGreeting;
console.log(newGetGreeting());