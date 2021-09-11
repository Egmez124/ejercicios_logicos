function mcm (a, b) { 
  const mcd = (a, b) => {
    let temp;
    while(b !==0){
      temp = b;
      b = a%b;
      a=temp;
    }
    return a;
  }
  const resultmcm = (a*b)/mcd(a, b);
  return resultmcm;
  
}
module.exports = mcm;