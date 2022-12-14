let statusMotor = 'desligado';

const ligarDesligar = () => {
    if(statusMotor === 'desligado') {
        return statusMotor = 'ligado';
    } else {
        return statusMotor = 'desligado'
    }
}

console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);