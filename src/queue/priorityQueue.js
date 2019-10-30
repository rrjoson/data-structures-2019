function PriorityQueue() {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(item) {
    this.collection.push(item);
    // Do sorting
  };
  this.dequeue = function(item) {
    const popped = this.collection.pop();
    // Do sorting
    return popped[0];
  };
  this.size = function() {
    return this.collection.length;
  };
  this.isEmpty = function() {
    return this.size() === 0;
  };
  // Only change code above this line
}
