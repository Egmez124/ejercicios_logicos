function toArray(obj) {
    //Implementación
    let arr = [];
    for (const [key, value] of Object.entries(obj)){
        arr.push([key, value]);
    }
    return arr;
}
module.exports = toArray;