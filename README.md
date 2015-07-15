#mini-stack

A simple stack implementation to store JSON objects

## Installation

    npm install mini-stack --save

## Usage

    var stack = require("mini-stack");
        theStack = stack();
    
    theStack.size(); // returns 0
    theStack.push({id: "First Person"}); // returns true
    theStack.push({id: "Second Person"}); // returns true
    theStack.size(); // returns 2
    theStack.peek(); // returns {id: "Second Person"}
    theStack.pop(); // returns {id: "Second Person"} and removes {id: "Second Person"} from the stack
    theStack.length(); // returns 1
    theStack.peek(); // returns {id: "First Person"}
    theStack.clear(); // returns true
    theStack.size(); // returns 0

## Tests

    npm test

## Release History

* 1.0.0 Initial release