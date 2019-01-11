//Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет,
//является ли переданное число натуральной степенью тройки.
//Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

const isPowerOfThree = (num) => {
    if (num <= 0) {
        return false;
    }
    if (num === 1) {
        return true;
    }
    let three = 3;
    if (three === num) {
        return true;
    }
    for (let i = 0; i < num; i++) {
        if (three < num) {
            three = three * 3;
        }
        if (three === num) {
            return true;
        }
        if (three > num) {
            return false;
        }
    }
} 

export default isPowerOfThree;