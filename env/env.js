// Считаем, сколько в строке заглавных букв
const bigLettersCount = (str) => {
    // BEGIN (write your solution here)
    let amountUpperLetters = 0;
    for (let i = 0; i < str.length; i += 1) {
        if ((str[i] === str[i].toUpperCase() && isNaN(str[i])) || str[i] === " ") {
            amountUpperLetters++;
        };
    };
    console.log(str + ':' + amountUpperLetters);
    return amountUpperLetters;
    // END
};

// Сравниваем, какая строка больше по количеству заглавных букв
const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);
    // BEGIN (write your solution here)
    if (firstCount > secondCount) {
        return 1;
    }

    if (firstCount < secondCount) {
        return -1;
    }

    return 0;
  // END
};
console.log(compare('AD', 'Ad sd'));

const greaterThan = (first, second) =>
  compare(first, second) === 1;

const lessThan = (first, second) =>
  compare(first, second) === -1;

const isEqual = (first, second) =>
  compare(first, second) === 0;
