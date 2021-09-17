function isEqual(objInput1, objInput2) {
    //Implementación
    const result = JSON.stringify(objInput1) === JSON.stringify(objInput2);
    return result;
}
module.exports = isEqual;