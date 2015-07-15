// Author: mshirlaw
// Date: 15 July 2015
// A simple stack implementation to store JSON objects
//
module.exports = {

    data: [
    ],

    // Add an item to the top of the stack
    // Param the item to add
    // Return true if the item is added to the stack
    push: function(item){
        this.data.unshift(item);
        return true;
    },

    // Remove an item from the top of the stack
    // Return the item if it exists or false
    pop: function(){
        if(this.data.length>0){
            var top = this.data[0];
            this.data.shift();
            return top;
        }
        else{
            return false;
        }
    },

    // View the item which is currently on the top of the stack
    // Return the item if it exists or false
    peek: function(){
        if(this.data.length>0){
            return this.data[0];
        }
        else{
            return false;
        }
    },
    size: function(){
        return this.data.length;
    },

    // Remove all items from the stack
    // Return true if all items are removed, false if the stack is empty
    clear: function(){

        if(this.data.length>0){
            this.data = [];
            return true;
        }
        else{
            return false;
        }
    }
}