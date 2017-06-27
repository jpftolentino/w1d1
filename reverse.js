function reverseString (myArgs){


  var reverseWord = [];
  //create a loop to go through each word in array

  for ( var i = 0; i < myArgs.length; i++) {


    //split word into an index of letters
    var newWord = myArgs[i].split("");
    var result = "";

    //create a loop that uses arr.push() and iterate backwards
    for( var j = newWord.length-1 ; j >= 0; j--){

      result += newWord[j];
    }

    //array that holds all words turned backwards
    reverseWord.push(result);
    console.log(reverseWord[i]);
  }

}

var myArgs = process.argv.splice(2);

reverseString(myArgs);

//dont log a function without a return value or else you get undefined