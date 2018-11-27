function myReplace(str, before, after) {
    if ((before.charAt(0).charCodeAt(0) >= 97 && before.charAt(0).charCodeAt(0) <= 122) && (after.charAt(0).charCodeAt(0) >= 97 && after.charAt(0).charCodeAt(0) <= 122 )) {
        return str.replace(before,after);
    } else if ((before.charAt(0).charCodeAt(0) >= 65 && before.charAt(0).charCodeAt(0) <= 90) && (after.charAt(0).charCodeAt(0) >= 65 && after.charAt(0).charCodeAt(0) <= 90 )) {
        return str.replace(before,after);
    } else if ((before.charAt(0).charCodeAt(0) >= 97 && before.charAt(0).charCodeAt(0) <= 122) && (after.charAt(0).charCodeAt(0) >= 65 && after.charAt(0).charCodeAt(0) <= 90 )) {
        return str.replace(before, after.replace(after.charAt(0), String.fromCharCode(after.charCodeAt(0) + 32)));
    } else {
        return str.replace(before, after.replace(after.charAt(0), String.fromCharCode(after.charCodeAt(0) - 32)));
    }
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

