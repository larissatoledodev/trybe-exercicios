let biggestPrimeNumber = 0;

for (currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
    let isPrime = true;
    for (currentDivisor = 2; currentDivisor < currentNumber; currentDivisor +=1) {
        if (currentNumber % currentDivisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
    biggestPrimeNumber = currentNumber;
}
}

console.log(biggestPrimeNumber);