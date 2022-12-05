const degreeAngleA = 65;
const degreeAngleB = 85;
const degreeAngleC = 30;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositive = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC >0;

if (allAnglesArePositive) {
    if (sumOfAngles === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log("erro: ângulo inválido");
} 