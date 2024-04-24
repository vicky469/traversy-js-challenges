// function reverseString(s) {
//     return s.split('').reverse().join('');
// }

function reverseString(s) {
    let reversed = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}

module.exports = reverseString;
