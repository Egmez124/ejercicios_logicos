const reverseString = (str) => {
    //Implementación
    if (typeof str !== 'string' || str.length > 15 || str.length <= 1){
        throw new Error("Tipo de dato o longitud no admitidos");
    }
    let array = str.split('');
    const invert = array.reverse().toString().replace(/,/g, "");
    return invert;
}
module.exports = {
    reverseString
}