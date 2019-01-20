// const reverse = (str) => {
//     let reverseStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i];
//     }
//     console.log(reverseStr);
// };

const reverseRecurs = (str) => {
    return str.length <= 1 ? str : reverseRecurs(str.substr(1, str.length - 1)) + str[0];
    // if (str.length <= 1) {
    //     return str;
    // } else {
    //     return reverseRecurs(str.substr(1, str.length - 1)) + str[0];
    // }
}
export default reverseRecurs;



