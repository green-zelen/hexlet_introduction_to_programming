const isHappyNumber = (num) => {
    for (let i = 10; i > 0; i--) {
        num = String(num);
        let sum = 0;
        for (let j = 0; j < num.length; j++) {
            sum = +Number(num[j]) * Number(num[j]);
        }
        if (sum === 1) {
            return true;
        }
        num = sum;
    }
    return false;
};

// isHappyNumber(2);
export default isHappyNumber;