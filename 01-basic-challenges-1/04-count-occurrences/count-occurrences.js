function countOccurrences(s, target) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === target) {
        count++;
        }
    }
    return count;
}

module.exports = countOccurrences;
