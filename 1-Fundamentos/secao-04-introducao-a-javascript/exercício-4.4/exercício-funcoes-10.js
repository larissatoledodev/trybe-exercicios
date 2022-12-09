function highestValueIndex(numbers) {
    let highestIndex = 0;
    for (let index in numbers) {
        if (numbers[highestIndex] < numbers[index]) {
            highestIndex = index;
        }
    }
    return highestIndex;
}

console.log(highestValueIndex([2, 3, 6, 7, 10, 1]));