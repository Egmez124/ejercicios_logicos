function keysAndValues(objInput) {
    //Implementación
    let keys = [];
    let values = [];
    let result = [];
    let newobj = Object.entries(objInput).sort();
    for (let i = 0; i<newobj.length; i++){
        keys.push(newobj[i][0]);
    }
    for (let i = 0; i<newobj.length; i++){
        values.push(newobj[i][1]);
    }
    result.push(keys);
    result.push(values);
    return result;
}
module.exports = keysAndValues;