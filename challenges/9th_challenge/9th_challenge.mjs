const invertCase = (str) => {
    let invertStr = '';
    for(let i = 0; i < str.length; i++) {
      if(str[i] == str[i].toUpperCase()) {
        invertStr += str[i].toLowerCase();
      } else {
        invertStr += str[i].toUpperCase();
      }
    }
    return invertStr;
}

export default invertCase;
