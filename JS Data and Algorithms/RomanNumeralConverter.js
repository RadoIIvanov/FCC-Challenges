function convertToRoman(num) {
    
    let arrMapDecimalToNumeral = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let numeralToBuild = "";
    num = num.toString();

    for (let i = num.length - 1, j = 1; i >= 0; --i, ++j ) {
        if (j === 1) {
            numeralToBuild = arrMapDecimalToNumeral[num[i]] + numeralToBuild;
        } else if (j === 2) {
            numeralToBuild = arrMapDecimalToNumeral[num[i]].replace(/I|V|X/g, (match) => {
                if (match === "I") {
                    return "X";
                } else if (match === "V") {
                    return "L";
                } else if (match === "X") {
                    return "C";
                }
            }) + numeralToBuild;
        } else if (j === 3) {
            numeralToBuild = arrMapDecimalToNumeral[num[i]].replace(/I|V|X/g, (match) => {
                if (match === "I") {
                    return "C";
                } else if (match === "V") {
                    return "D";
                } else if (match === "X") {
                    return "M";
                }
            }) + numeralToBuild;
        } else {
            numeralToBuild = arrMapDecimalToNumeral[num[i]].replace(/I|V|X/g, (match) => {
                if (match === "I") {
                    return "M";
                } else if (match === "V") {
                    return "D";
                } else if (match === "X") {
                    return "M";
                }
            }) + numeralToBuild;
        }
    }
    return numeralToBuild;
}

console.log(convertToRoman(3999));