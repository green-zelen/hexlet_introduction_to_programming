let assert = require('assert');

// Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает следующим образом:
// Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.
// Для числа 38 процесс будет выглядеть так:
// 3 + 8 = 11
// 1 + 1 = 2
// Результат: 2

// Суммирование цифр
const strSum = (num) => {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i += 1) {
        sum += Number(str[i]);
    }
    return sum;
}

// Сложение в цикле
const addDigits = (num) => {
    num = String(num);
    while (num.length !== 1) {
        num = String(strSum(num));
    }
    return Number(num);
}

console.log(typeof addDigits(0));
console.log(addDigits(0));



// Альтернативное сложение в рекурсии
const addDigits_2 = (num) => {
    if (String(num).length === 1) { return num; }
    return addDigits_2(strSum(num));
}

// Проверки
assert.strictEqual(addDigits(111), 3);
assert.strictEqual(addDigits(67), 4);
assert.strictEqual(addDigits(123456), 3);
assert.strictEqual(addDigits(0), 0);
assert.strictEqual(addDigits(10), 1);