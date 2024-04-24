function isPalindrome(str) {
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');//remove special characters and spaces
    // The two slashes (`/`) are used to denote a regular expression (regex) in JavaScript. 
    // The `^` character means not
    // g is a global search that looks for all occurrences of the pattern in the string and not just the first one.
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

function isPalindrome2(str) {
    const formattedStr = removeNonAlphanumeric(str.toLowerCase());
    const reversedStr = reverseString(formattedStr);
    return formattedStr === reversedStr;
}

function removeNonAlphanumeric(str) {
  let formattedStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Numbers 0-9
    (code >= 97 && code <= 122) // Lowercase letters a-z
  );
}

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

module.exports = isPalindrome;
