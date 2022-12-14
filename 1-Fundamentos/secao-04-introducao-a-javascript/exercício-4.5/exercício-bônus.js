const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
        if (fraseArray[index] === 'x') {
            fraseArray[index] = nome;
        }
    }
    return fraseArray.join(' ');
};

console.log(substituaX('Lari'));

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let result = `
  ${func}
  
  Minhas três principais habilidades são:`;
  for (let index = 0; index < skills.length; index += 1) {
    result = `${result}
    - ${skills[index]}`;
  }
  return result;
}

console.log(minhasSkills(substituaX('Lari')));