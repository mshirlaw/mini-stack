#mini-stack

A simple stack implementation to store JSON objects

## Installation

    npm install mini-stack --save

## API

###size()
Returns the size of the stack, or number of items

###clear()
Clears all items in the stack

###push(item)
Pushes an new item onto the top of the stack

###pop()
Returns the item which is currently at the top of the stack and removes it

###peek()
Returns the item which is currently at the top of the stack but does not remove it

## Usage

    var stack = require("mini-stack");
    
    stack.size(); // returns 0
    stack.push({id: "First Person"}); // returns true
    stack.push({id: "Second Person"}); // returns true
    stack.size(); // returns 2
    stack.peek(); // returns {id: "Second Person"}
    stack.pop(); // returns {id: "Second Person"} and removes {id: "Second Person"}
    stack.length(); // returns 1
    stack.peek(); // returns {id: "First Person"}
    stack.clear(); // returns true
    stack.size(); // returns 0

## Tests

    npm test

## Release History

* 1.0.0 Initial release