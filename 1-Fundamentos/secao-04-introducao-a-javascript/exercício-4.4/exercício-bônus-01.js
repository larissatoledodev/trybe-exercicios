let romanNumbers = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
};

function romanToDecimal(number) {
    number = number.toLowerCase();
    let len = number.length;
    let sum = romanNumbers[number[len - 1]];
    let current = romanNumbers[number[len - 1]];
    for (let i = 2; i <= len; i += 1) {
        let prox = romanNumbers[number[len - i]];
        if (current <= prox) {
            sum += prox;
        } else {
            sum -= prox;
        }
        current = prox;
    }
    return sum;
}
