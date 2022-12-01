const grade = 80;

if (grade >= 80) {
    console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
} else if (grade < 80 && grade >= 60) {
    console.log("Você está na nossa lista de espera");
} else if (grade < 60) {
    console.log("Infelizmente, você reprovou.");
}
