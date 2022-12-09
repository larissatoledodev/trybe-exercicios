function moreRepetition(numbers) {
    let contRepeated = 0;
    let contNumber = 0;
    let indexNumberRepeated = 0;
    for (let index in numbers) {
        let  checkNumber = numbers[index];
        for (let index2 in numbers) {
            if (checkNumber === numbers[index2]) {
                contNumber += 1;
            }
        }
        if (contNumber > contRepeated) {
            contRepeated = contNumber;
            indexNumberRepeated = index;
        }
        contNumber = 0;
    }
    return numbers[indexNumberRepeated];
}

console.log(moreRepetition([2, 3, 2, 5, 8, 2, 3]));