function arrayOfMultiples (num, length) {
  let result = [];

  for (let i=1;i<=length;i++){
      result.push(i*num);
  }
  return result;
}
module.exports = arrayOfMultiples;