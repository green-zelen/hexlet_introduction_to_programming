const reverseStr = (str) => {
    let rts = '';
    for(let i = str.length - 1; i >= 0; i--) {
        rts += str[i];
    }
    return rts;
}

const reverseInt = (num) => {
    let stringNum = '';
    let result;
    if (num < 0) {
        stringNum = String(-num);
        result = reverseStr(stringNum);
        num = -(Number(result));
        console.log(num);
        return num;
    } else {
        stringNum = String(num);
        result = reverseStr(stringNum);
        num = Number(result);
        console.log(num);
        return num;
    }
}
export default reverseInt;

// reverseInt(-78);
// reverseInt(992);
// reverseInt(0);
