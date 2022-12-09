function verificaFimPalavra(word, endWord) {
    word = word.split('');
    endWord = endWord.split('');
    let controle = true;
    for (let index = 0; index < endWord.length; index += 1) {
        if (word[word.length - endWord.length + index] !== endWord[index]) {
            controle = false;
        }
    }
    return controle;
}

//console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));