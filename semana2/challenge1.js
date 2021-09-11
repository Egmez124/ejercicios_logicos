function twoSums(numbs, target) {
    //Implementación
    let newarr = []
    for (let i = 0; i<numbs.length; i++){
        if (numbs[i]+numbs[i+1]===target){
            newarr.push(i);
            newarr.push(i+1);
        }
    }
    return newarr;
}
module.exports = twoSums;