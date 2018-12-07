function telephoneCheck(str) {
    // Good luck!
    return /^1?\d{10}$|^1?[\- ]?(\(\d{3}\))[\- ]?\d{3}[\- ]?\d{4}$|^1?[\- ]?\d{3}[\- ]?\d{3}[\- ]?\d{4}$/.test(str);
}

console.log(telephoneCheck("10 (757) 622-7382"));