function greaterThanThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return 'O maior número é: ' + num1;
    } else if (num2 > num1 && num2 > num3) {
        return 'O maior número é: ' + num2;
    } else {
        return 'O maior número é: ' + num3;
    }
}

//console.log(greaterThanThree(10, 2, 3));