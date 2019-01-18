const isHappyTicket = (obj) => {
    if (obj === Number(obj)) {
        obj = String(obj);
    }
    let left = 0;
    let right = 0;
    for (let i = 0; i < 3; i++) {
        left += Number(obj[i]);
    }
    for (let j = 5; j >= 3; j--) {
        right += Number(obj[j]); 
     }
    if (left === right) {
        return true;
    }
    return false;
}

export default isHappyTicket;