function titleCase(s) {
    // 1. Split the string into an array of words using the space character as the separator.
    // 2. Map over each word in the array and transform to the desired format.
    // 3. Join the array of words back into a string using the space character as the separator.
    return s
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' '); 
}

module.exports = titleCase;
