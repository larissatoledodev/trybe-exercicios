function sumAllNumbers(number) {
    let total = 0;
    for (let index = 0; index <= number; index += 1) {
        total = total + index;
    }
    return total;
}

console.log(sumAllNumbers(5));