var should = require("chai").should(),
    stack = require("../index");

describe("when the stack is empty it:", function(){

    it("should have size === zero", function(){
        stack.size().should.equal(0);
    });

    it("should return false when calling pop()", function(){
        stack.pop().should.equal(false);
    });

    it("should return false when calling peek()", function(){
        stack.peek().should.equal(false);
    });

    it("should return false when calling clear()", function(){
        stack.clear().should.equal(false);
    });
});

describe("when the stack contains items it:", function(){

    var firstItem = {
        name: "First item"
    };

    var secondItem = {
        name: "Second item"
    };

    it("should return true when adding items to the stack", function(){
        stack.push(firstItem).should.equal(true);
        stack.push(secondItem).should.equal(true);
        stack.size().should.equal(2);
    });

    it("should remove an item from the top of the stack when calling pop()", function(){
        stack.pop().should.equal(secondItem);
        stack.size().should.equal(1);
    });

    it("should return the item on the top of the stack when calling peek()", function(){
        stack.peek().should.equal(firstItem);
        stack.size().should.equal(1);
    });

    it("should remove all items when calling clear()", function(){
        stack.clear().should.equal(true);
        stack.size().should.equal(0);
    });

});
