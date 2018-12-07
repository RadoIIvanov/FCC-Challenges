function palindrome(str) {
    // Good luck!
    let alphaNumericVersionOfStr = str.replace(/\W|_/g, "").toLowerCase();

    for (let i = 0, j = alphaNumericVersionOfStr.length - 1; i <= j ; ++i, --j) {
        if (alphaNumericVersionOfStr.charAt(i) !== alphaNumericVersionOfStr.charAt(j)) {
            return false;
        }
    }
    return true; 
}
