const bracketsBalance = (str) => {
    if (str === '') {
        console.log('true');
        return true;
    }
    let bracketLeft = 0;
    let bracketRight = 0;
    if (str.length%2 === 0) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(') {
                bracketLeft++;
                console.log(bracketLeft);
            } else {
                 bracketRight++;
            }
            if (bracketLeft < bracketRight) {
                console.log(bracketLeft, bracketRight, 'false – Закрывающих скобок больше');
                return false;
            }
        }
        if (bracketLeft !== bracketRight) {
            console.log('false – количество скобок не равное', bracketLeft, bracketRight);
            return false;
        } 
        else {
            console.log(bracketLeft + bracketRight + 'true');
            return true;
        }
    }
    console.log('false - нечетное количество');
    return false;
}

export default bracketsBalance;
