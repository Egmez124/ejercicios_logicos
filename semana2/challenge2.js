function divisibleByLeft(n) {
    //Implementación
    let numbersarr = n.toString().split("");
    let result = [];
    for (let i = 0; i<numbersarr.length; i++){
        if (numbersarr[i]%numbersarr[i-1]===0){
            result.push(true)
        }
        else{
            result.push(false);
        }
    }
    return result;
}
module.exports = divisibleByLeft;