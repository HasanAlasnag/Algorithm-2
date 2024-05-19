function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestLength = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestLength) {
        longestLength = words[i].length;
      }
    }
        return longestLength;
  }
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));  
  console.log(findLongestWord("May the force be with you"));