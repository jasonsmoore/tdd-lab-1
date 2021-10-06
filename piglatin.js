function translate(english) {
    english = english.toLowerCase().split(' ');
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let sentence = [];
    english.forEach(word => {
        let firstVowel = 1234;
        vowel.forEach(e => {
            word.indexOf(e);
            if (word.indexOf(e) > -1) {
                if (word.indexOf(e) < firstVowel) {
                    firstVowel = word.indexOf(e);
                }
            }
        });
        let string = word.slice(firstVowel);
        let first = word.slice(0, firstVowel);
        let last = firstVowel === 0 ? "way" : "ay";
        sentence.push(string + first + last);
    });
    return sentence.join(' ');
};
module.exports = translate;