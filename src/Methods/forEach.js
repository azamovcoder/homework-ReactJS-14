const data = [2, 6, 7, 8, 19];
Array.prototype.handleForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// Usage
data.handleForEach((element) => {
  console.log(element);
});
