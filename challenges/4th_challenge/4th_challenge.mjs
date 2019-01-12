// Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

// Квадрат суммы первых десяти натуральных чисел это 
// (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

// Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел:
// 3025 − 385 = 2640.

// Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает 
//разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.

const sumSquareDifference = (n) => {
    let sum = 0;
    let sumOfSquares = 0;
    let squareOfSums = 0;
    for(let i = n; i > 0; i--) {
        sumOfSquares += i * i;
        sum += i;
    }
    squareOfSums = sum * sum;
    if(squareOfSums > sumOfSquares) return (squareOfSums - sumOfSquares);
    return (sumOfSquares - squareOfSums);
}

export default sumSquareDifference;