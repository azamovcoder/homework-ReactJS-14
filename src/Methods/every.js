let data = [56, 788, 12, 4, 11, 17, 6];

for (let i = 0; i < data; i++) {
  data.push(i);
}
Array.prototype.handleEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  return true;
};

// Usage
const allEven = data.handleEvery((num) => num % 2 === 0);
console.log(allEven); // true
