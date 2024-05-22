Array.prototype.handleFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return this[i];
    }
  }
  return undefined;
};

const newNumbers = data.handleFind((num) => num > 2);
console.log(newNumbers);
