//Convert a word to pig latin by taking its first letter
// moving it to the end of the word, then adding "ay"

function pigLatin(words) {

  var pigLatinWords = [];

  //split words into an array of letters
  for(var i = 0; i < words.length; i++){
      pigLatinWords += words[i].slice(1) + words[i][0] + ("ay ");


  }
  console.log(pigLatinWords);

}

var myArgs = process.argv.slice(2);

pigLatin(myArgs);