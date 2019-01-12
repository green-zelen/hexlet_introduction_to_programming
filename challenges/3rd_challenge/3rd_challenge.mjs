// Создайте функцию isPerfect, которая принимает число и возвращает true,
// если оно совершенное, и false — в ином случае.

// Совершенное число — это положительное целое число, равное сумме его положительных делителей 
//(не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

const isPerfect = (num) => {
    if (num <= 0) {
        return false; 
    }
    let devisor = 0;
    for (let i = (num - 1); i > 0; i--){
      if ((num % i) === 0) {
        devisor += i;
      }
    }
    if (devisor === num) {
        return true;
    }
    return false;
}

export default isPerfect;
