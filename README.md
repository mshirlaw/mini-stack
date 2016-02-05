#mini-stack

A simple stack implementation to store JSON objects

## Installation

	npm install mini-stack --save

## Usage

	var Stack = require("mini-stack");
	var stack = new Stack();

	stack.size(); // returns 0
	stack.push({id: "First Person"}); // returns true
	stack.push({id: "Second Person"}); // returns true
	stack.size(); // returns 2
	stack.peek(); // returns {id: "Second Person"}
	stack.pop(); // returns {id: "Second Person"} and removes {id: "Second Person"}
	stack.size(); // returns 1
	stack.peek(); // returns {id: "First Person"}
	stack.clear(); // returns true
	stack.size(); // returns 0

## Tests

	npm test

## Release History

* 1.0.0 Initial Release
* 1.0.1 Updated README.md
* 1.0.2 Minor bug fixes
* 1.0.3 Updated to use IFFE to avoid polluting scope

## API

size() -> Returns the size of the stack, or number of items

clear() -> Clears all items in the stack

push(item) -> Pushes an new item onto the top of the stack

pop() -> Returns the item which is currently at the top of the stack and removes it

peek() -> Returns the item which is currently at the top of the stack but does not remove it
