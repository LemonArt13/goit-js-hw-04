const findLongestWord = function (string) {
  const arrayWords = string.split(" ");
  let longestWord = "";
  for (let i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i].length > longestWord.length) {
      longestWord = arrayWords[i];
    }
  }
  return longestWord;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
