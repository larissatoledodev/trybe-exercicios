let aliquotINSS;
let aliquotIR;

let grossSalary = 5000.00;

if (grossSalary <= 1556.94) {
    aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
    aliquotINSS = grossSalary * 0.09
} else if (grossSalary <= 5189.82) {
    aliquotINSS = grossSalary * 0.11;
}else {
    aliquotINSS = 570.88
};

let baseSalery = grossSalary - aliquotINSS;

if (baseSalery <= 1903.98) {
    aliquotIR = 0;
} else if (baseSalery <= 2826.65) {
    aliquotIR = (baseSalery * 0.075) - 142.80;
} else if (baseSalery <= 3751.05) {
    aliquotIR = (baseSalery * 0.15) - 354.80;
} else if (baseSalery <= 4664.68) {
    aliquotIR = (baseSalery * 0.225) - 636.13;
} else {
    aliquotIR = (baseSalery * 0.275) - 869.36;
};

console.log ("Salário Líquido: " + (baseSalery - aliquotIR));

