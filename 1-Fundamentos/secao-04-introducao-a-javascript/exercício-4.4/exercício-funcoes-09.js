function verificaPalindrome(string) {
    for(index in string) {
        if(string[index] != string[(string.length - 1) - index]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindrome('larissa'));