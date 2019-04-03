function countLetters(string) {
 var counter = {};
 for (var character = 0; character < string.length; character++) {
  var char = string[character];
  if (char !== ' ') {
    if (typeof counter[char] === "number") {
      counter[char] += 1;
    } else {
      counter[char] = 1;
      }
    }
  }
  return counter;
}
console.log(countLetters('Lighthouse in the house'));