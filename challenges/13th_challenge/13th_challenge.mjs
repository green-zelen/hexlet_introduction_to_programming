const formattedTime = (min) => {
    let remnant = min % 60;
    let hours = (min - remnant) / 60;
    if(String(hours).length === 1) {
        hours = '0' + hours;
    }
    if (String(remnant).length === 1) {
        remnant = '0' + remnant;
    }
    let time = hours + ':' + remnant;
    return time;
}

export default formattedTime;