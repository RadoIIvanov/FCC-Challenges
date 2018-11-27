function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    
    let spinalStr = "";
    if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) {    //// first letter case
        spinalStr += String.fromCharCode(str.charCodeAt(0) + 32);
    } else {
        spinalStr += str.charAt(0);
    }
    for (let i = 1 ; i < str.length ; ++i) {

        if (str.charAt(i) === "-" || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)) { ///// small letter transformation case
            if (str.charAt(i-1) === "_" || str.charAt(i-1) === " ") {
                spinalStr += "-";
            }
            spinalStr += str.charAt(i);
        } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {    /// large letter transformation case
            if (spinalStr.charAt(spinalStr.length - 1) !== "-") {
                spinalStr += "-";
            }
            spinalStr += String.fromCharCode(str.charCodeAt(i) + 32);
        }           
    }
    return spinalStr;
}

console.log(spinalCase("Teletubbies say Eh-oh"));
