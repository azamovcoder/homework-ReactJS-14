let data = [56, 788, 12, 4, 11, 17, 6];

for (let i = 0; i < data; i++) {
  data.push(i);
}
Array.prototype.handleFilter = function (callback) {
  const newData = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newData.push(this[i]);
    }
  }
  return newData;
};
const evens = data.myFilter((num) => num % 2 === 0);
console.log(evens); // [2, 4]
