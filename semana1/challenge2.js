const reverseInt = (number=-13940) => {
    //Implementación
    if(number % 1 !== 0){
        throw new Error('Tipo de dato no admitido');
    }

    let arr = number.toString().split('');
    let signo = [];

    for (let i = 0; i<arr.length; i++){
        if(arr[i]==='-'){
            signo.push(arr[i]);
            arr.splice(i,1);
        }
        if (arr[arr.length-1]==='0'){
            arr.pop();
        }
    }
    arr.reverse();
    //console.log(signo);
    if (signo){
        arr.splice(0, 0, signo[0])
    }
    
    //console.log(arr);
    const result = arr.join('');
    const result1 = parseInt(result);
    //console.log(result1);
    return result1;
}
//reverseInt();
module.exports = {
    reverseInt
}