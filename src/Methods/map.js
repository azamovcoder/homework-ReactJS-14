let data = [56, 788, 12, 4, 11, 17, 6];

for (let i = 0; i < data; i++) {
  data.push(i);
}

Array.prototype.handleMap = function (callbackFunc) {
  let newData = this;
  let res = [];
  for (let i = 0; i < newData.length; i++) {
    res.push(callbackFunc(newData[i], i, data));
  }
  return res;
};

let customRes = data.handleMap((el) => el * 2);
console.log(customRes);
