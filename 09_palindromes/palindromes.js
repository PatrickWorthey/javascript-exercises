const palindromes = function (string) {
    var word = string.toLowerCase().replace(/[^a-z]/g, "");
    return word.split("").reverse().join("") == word;
    
}

// Do not edit below this line
module.exports = palindromes;
