function triangleAnglesValidate(angle1, angle2, angle3) {
    let sumOfAngles = angle1 + angle2 + angle3;
    let allAnglesArePositives = angle1 > 0 && angle2 > 0 && angle3 > 0;
    if (allAnglesArePositives) {
        if (sumOfAngles === 180) {
            return true;
        } else {
            return false;
        }
    } else {
        return 'Erro: ângulo inválido';
    }
}

//console.log(triangleAnglesValidate(80, 60, -50));