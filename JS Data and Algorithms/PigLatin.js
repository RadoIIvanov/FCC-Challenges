function translatePigLatin(str) {
    let pigLatinStr = "";
    if (/[aeoiu]/.test(str.charAt(0))) {   //// case 1
        return pigLatinStr = str + "way";
    }
    if (!/[aeoiu]/g.test(str)) {
        return pigLatinStr = str + "ay";  //// case 2
    }
    for (let i = 0; i < str.length; ++i) {  //// general case
        if (/[aeoiu]/.test(str.charAt(i))) {
            return pigLatinStr = str.substring(i, str.length) + str.substring(0,i) + "ay";
        }
    }

}

console.log(translatePigLatin('awko'));

/// string inputs are guaranteed to be English words in lower case

/// case 1 : if the string begins with a vowel => just add "way" to the end
/// case 2 : words with no vowels => just add "ay" to the end
/// general case : find the first vowel and move the previous letters to the end of the string and add an "ay" suffix 