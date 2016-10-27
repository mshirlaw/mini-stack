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
		
		var data = [];
		
		return {
			push: push,
			pop: pop,
			peek: peek,
			size: size,
			clear: clear
		};
		
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
		function push (item) {
			data.unshift(item);
			return true;
		}
		
		/**
		*
		* @name pop
		* @description 
		* Remove an item from the top of the stack
		* 
		* @return the item if it exists or false
		*/
		function pop(){
			if(data.length>0){
				var top = data[0];
				data.shift();
				return top;
			} else {
				return false;
			}
		}
		
		/**
		*
		* @name peek
		* @description 
		* View the item which is currently on the top of the stack
		* 
		* @return the item if it exists or false
		*/
		function peek(){
			if(data.length>0){
				return data[0];
			} else {
				return false;
			}
		}
		
		function size(){
			return data.length;
		}
		
		/**
		*
		* @name peek
		* @description 
		* Remove all items from the stack
		* 
		* @return true if all items are removed, false if the stack is empty
		*/
		function clear(){
			
			if(data.length>0){
				data = [];
				return true;
			} else {
				return false;
			}
		}
	}
	
	module.exports = stack;
	
})();
