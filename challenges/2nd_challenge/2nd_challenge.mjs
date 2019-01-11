// Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, 
// и возвращает наименьшую разницу между ними.

const diff = (int1, int2) => {
    if(int2 < int1) {
        let bufer = int1;
        int1 = int2;
        int2 = bufer;
    }
    if(int1 > 0) {
        int2 = int2 - int1;
        int1 = 0;
    }
    let addition = 360 - (int1 + int2);
    if (addition <= (int1 + int2)) {
        return addition;
    }
    return int1 + int2;
}

export default diff;