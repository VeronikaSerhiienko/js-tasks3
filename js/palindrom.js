console.log(isPalindrom('Анна'));
console.log(isPalindrom('онф'));
console.log(isPalindrom('А роза упала на лапу Азора'));

function isPalindrom(str) {
  str = str.toLowerCase().split(' ').join();
  var result = false;
  for (var i = 0; i < str.length; i++) {
    result = str[i] === str[str.length - 1 - i];
  }
  return result;
}