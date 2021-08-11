stringValidate = (stringParam) => {
    if (typeof(stringParam) === 'string') {
        return true;
    } else {
        return false;
    }
}

numValidate = (numParam) => {
    if (typeof(numParam) === 'number') {
        return true;
    } else {
        return false;
    }
}

boolValidate = (boolParam) => {
    if (typeof(boolParam) === 'boolean') {
        return true
    } else {
        return false
    }
}