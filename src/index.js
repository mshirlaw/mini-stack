(function(){
	'use strict';
	
	/**
	*
	* @name mini-stack
	* @description 
	* A simple stack implementation to store JSON objects
	* 
	* @author
	* mshirlaw
	*/
	function stack(){
		
		return {
			
			data: [],
			/**
			*
			* @name push
			* @description 
			* Add an item to the top of the stack
			* 
			* @param {object} item - the item to add to the stack
			*
			* @return true if the item has been added to the stack
			*/
			push: function(item){
				this.data.unshift(item);
				return true;
			},
			/**
			*
			* @name pop
			* @description 
			* Remove an item from the top of the stack
			* 
			* @return the item if it exists or false
			*/
			pop: function(){
				if(this.data.length>0){
					var top = this.data[0];
					this.data.shift();
					return top;
				} else {
					return false;
				}
			},
			/**
			*
			* @name peek
			* @description 
			* View the item which is currently on the top of the stack
			* 
			* @return the item if it exists or false
			*/
			peek: function(){
				if(this.data.length>0){
					return this.data[0];
				} else {
					return false;
				}
			},
			size: function(){
				return this.data.length;
			},
			/**
			*
			* @name peek
			* @description 
			* Remove all items from the stack
			* 
			* @return true if all items are removed, false if the stack is empty
			*/
			clear: function(){
				
				if(this.data.length>0){
					this.data = [];
					return true;
				} else {
					return false;
				}
			},
			
		};
		
	}
	
	module.exports = stack;
	
})();
