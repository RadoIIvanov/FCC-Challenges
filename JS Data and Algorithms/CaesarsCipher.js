function rot13(str) { // LBH QVQ VG!

    let decodedStr = "";

    for (let ch of str) {
        decodedStr += ch.charCodeAt(0) > 90 || ch.charCodeAt(0) < 65 ? ch
                    : ch.charCodeAt(0) + 13 <= 90 ? String.fromCharCode(ch.charCodeAt(0) + 13)
                    : String.fromCharCode(ch.charCodeAt(0) - 13);
    }
    return decodedStr;
}

// Change the inputs below to test
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
