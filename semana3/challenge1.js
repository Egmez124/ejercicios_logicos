function countPrimes(number) {
    //Implementación
    let primes = [];
    const numPrime = (num)=>{
        for (let i = 2; i < num; i++){
            if (num % i === 0){
                return false;
            }
        }
        return num !== 1;
    }
    for (let i = 1; i<=number; i++){
        primes.push(numPrime(i));
    }
    let countprimes=0
    for (let i = 0; i<primes.length; i++){
        if (primes[i]===true){
            countprimes = countprimes + 1;
        }
    }
    return countprimes;
}
module.exports = countPrimes;