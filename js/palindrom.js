console.log(isPalindrom('Анна'));
console.log(isPalindrom('оно'));
console.log(isPalindrom('А роза упала на лапу Азора'));

function isPalindrom(str) {
  str = str.toLowerCase().split(' ').join();
  var result = false;
  for (var i = 0; i < str.length; i++) {
      if (str[i] === str[str.length - 1 - i]) {
        result = true;
      } else {
        result = false;
      }
    }
    return result;
}