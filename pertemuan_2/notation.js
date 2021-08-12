floatToNum = (param) => {
    if(typeof(param) === 'number') {
        return Math.round(param);
    } else {
        return 'parameter yang diberikan bukan angka';
    }
}

stringToNum = (param) => {
    return Number(param);
}

oddEvenChecker = (param) => {
    if(param % 2 == 0) {
        return `${param} adalah bilangan genap`;
    } else {
        return `${param} adalah bilangan ganjil`;
    }
}

module.exports = {
    floatToNum,
    stringToNum,
    oddEvenChecker
};