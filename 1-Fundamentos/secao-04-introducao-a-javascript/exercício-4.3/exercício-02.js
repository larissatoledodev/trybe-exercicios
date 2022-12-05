let word = 'tryber';
reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
    reverseWord += word[word.length - 1 - index];    
}

console.log(reverseWord);