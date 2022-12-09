function lowestValueIndex(numbers) {
    let lowestIndex = 0;
    for (let index in numbers) {
        if (numbers[lowestIndex] > numbers[index]) {
            lowestIndex = index;
        }
    }
    return lowestIndex;
}


console.log(lowestValueIndex([2, 4, 6, 7, 10, 0, -3]));
