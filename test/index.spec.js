var should = require('chai').should();
var expect = require('chai').expect;

var Stack = require('../src/index');
var stack = new Stack();

describe('when the stack is empty it:', function(){
	
	it('should have size === zero', function(){
		stack.size().should.equal(0);
	});
	
	it('should return false when calling pop()', function(){
		stack.pop().should.equal(false);
	});
	
	it('should return false when calling peek()', function(){
		stack.peek().should.equal(false);
	});
	
	it('should return false when calling clear()', function(){
		stack.clear().should.equal(false);
	});
});

describe('when the stack contains items it:', function(){
	
	beforeEach(function(){
		stack.clear();
	});
	
	it('should return true when adding items to the stack', function(){
		stack.push({name: 'First item'}).should.equal(true);
		stack.push({name: 'Second item'}).should.equal(true);
		stack.size().should.equal(2);
	});
	
	it('should remove an item from the top of the stack when calling pop()', function(){
		stack.push({name: 'First item'}).should.equal(true);
		stack.push({name: 'Second item'}).should.equal(true);
		stack.pop().should.deep.equal({name: 'Second item'});
		stack.size().should.equal(1);
		stack.pop().should.deep.equal({name: 'First item'});
		stack.size().should.equal(0);
	});
	
	it('should return the item on the top of the stack when calling peek()', function(){
		stack.push({name: 'First item'}).should.equal(true);
		stack.push({name: 'Second item'}).should.equal(true);
		stack.peek().should.deep.equal({name: 'Second item'});
		stack.size().should.equal(2);
	});
	
	it('should remove all items when calling clear()', function(){
		stack.push({name: 'First item'}).should.equal(true);
		stack.push({name: 'Second item'}).should.equal(true);
		stack.size().should.equal(2);
		stack.clear().should.equal(true);
		stack.size().should.equal(0);
	});
	
});
