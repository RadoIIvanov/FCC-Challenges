function fearNotLetter(str) {
    
    for (let i = 0 ; i < str.length; ++i) {
        let charCode = str.charCodeAt(i);
        if (str.charAt(i+1) === String.fromCharCode(charCode+1)) {
            continue;
        } else if (i !== str.length - 1) {
            return String.fromCharCode(charCode+1);
        }
    }
    return undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));