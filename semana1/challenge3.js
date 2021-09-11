const capitalizeLetters = (str='welcom to academlo') => {
    //Implementación
    if (typeof str !== 'string'){
        throw new Error("Tipo de dato no admitidos");
    }
    const result = str.replace(/\b\w/g, l => l.toUpperCase());
    return result
}

module.exports = {
    capitalizeLetters
}