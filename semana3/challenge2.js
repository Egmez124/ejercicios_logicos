function minMax(aNumbs) {
    //Implementación
    const min = Math.min.apply(null, aNumbs)
    const max = Math.max.apply(null, aNumbs)
    let obj = {
        'min': 0,
        'max': 0
    }
    obj.min = min;
    obj.max = max;
    //console.log(obj);
    return obj;
}
//minMax([4,6,2,7,3]);
module.exports = minMax;