function biggestWord(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
      if (maiorPalavra.length < palavras[indice].length) {
        maiorPalavra = palavras[indice];
      }
    }
  
    return maiorPalavra;
  }
  
  console.log(biggestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));