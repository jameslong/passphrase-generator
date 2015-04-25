var generatePassphrase = function (wordList, length) {
        var words = times(length, generateWord.bind(null, wordList));
        return words.join(' ');
};

var generateWord = function (wordList) {
        var numbers = times(5, getRandomInt.bind(null, 1, 6));
        var key = numbers.join('');
        return wordList[key];
};

var getRandomInt = function (min, max) {
        return (Math.floor(Math.random() * (max - min)) + min);
}

var times = function(n, iteratee) {
        var result = Array(n);
        for (var i = 0; i < n; i += 1) {
                result[i] = iteratee(i);
        }
        return result;
};

(function () {
        var passphraseSize = 6;
        var wordList = dicewareWords;
        var passphrase = generatePassphrase(wordList, passphraseSize);
        console.log('Generated passphrase: ' + passphrase);
}());