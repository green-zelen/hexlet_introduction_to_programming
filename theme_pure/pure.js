const firstLetterUpper = (str) => {
    let letter = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === " ") {
            letter += str[i].toUpperCase();
        } else {
            letter += str[i];
        }
    }
    console.log(letter);
    return letter;
}

firstLetterUpper('мама дорогая роди меня обратно');
