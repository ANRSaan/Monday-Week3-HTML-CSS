const hasMoreVowels = (word) => {
    let vowels = ["A", "E", "I", "O", "U", "Y"]
    word = word.toUpperCase();
    let increment = 0;
    for (let i = 0; i < word.length; i++){
      if (vowels.includes(word[i]))
        increment++
    }
    return increment > word.length / 2
  }
  console.log(hasMoreVowels("AIiSs"))
console.log(hasMoreVowels("AIOUE"))