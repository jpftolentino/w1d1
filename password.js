/* Write a program named password.js that takes a single command line argument, a string,
and obfuscates it by applying the following rules.

Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one). */

//receive input from command line "node password.js 'values' "

function obfuscate(myArgs){

  //convert array value into string and then split string into array values

  var arrValue = myArgs[0].split("");
  var password = "";


  for(var i = 0; i < arrValue.length; i++){
    //if "a" is value of array change value to 4

    if( arrValue[i] === "a"){
      arrValue[i] = 4;
      password += arrValue[i];
    } else if ( arrValue[i] === "e") {    //if "e" is value of array change value to 3
      arrValue[i] = 3;
      password += arrValue[i];
    } else if ( arrValue[i] === "o") {    //if "o" is value of array change value to 0
      arrValue[i] = 0;
      password += arrValue[i];
    } else if ( arrValue[i] === "l") {    //if "l" is value of array change value to 1
      arrValue[i] = 1;
      password += arrValue[i];
    } else {
      password += arrValue[i];
    }

  }

  return password;
}

var myArgs = process.argv.splice(2);

console.log(obfuscate(myArgs));
