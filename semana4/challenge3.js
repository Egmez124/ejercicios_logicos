function isSpecialArray (specialArr) {
  const indexpares = [];
  let indeximpares = [];

  for (let i = 0; i<specialArr.length;i++){
    if (i%2===0){
      indexpares.push(specialArr[i]);
    }
    else{
      indeximpares.push(specialArr[i]);
    }
  }


  for (let i = 0; i< indexpares.length;i++){
    if (indexpares[i] % 2 !== 0){
      indexpares[i]= false;
    }
    else{
      indexpares[i]= true;
    }
  }


  for (let i = 0; i< indeximpares.length;i++){
    if (indeximpares[i] % 2 !== 0){
      indeximpares[i]= true;
    }
    else{
      indeximpares[i] = false;

    }
  }

  if (indexpares.includes(false)===false && indeximpares.includes(false)=== false){
    return true;
  }
  return false;
}
module.exports = isSpecialArray;