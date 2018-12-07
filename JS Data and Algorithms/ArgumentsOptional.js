function addTogether(a, b) {
    if (typeof a !== "number") {
        return undefined;
    }
    if (b === undefined) {
        return (c) => {
            if (typeof c !== 'number') {
                return undefined;
            }
            return a + c;
        }
    }
    if (typeof b !== "number") {
        return undefined;
    } else {
        return a + b;
    }
}