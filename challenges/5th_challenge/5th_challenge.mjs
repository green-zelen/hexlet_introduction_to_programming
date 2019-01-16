const fAccerman = (m, n) => {
    if (m === 0) {
        return n + 1;
    }
    if (n === 0 && m > 0) {
        return fAccerman(m - 1, 1);
    }
    if (n > 0 && m > 0) {
        return  fAccerman(m - 1, fAccerman(m,n - 1));
    }
}
export default fAccerman;

// fAccerman(0, 0);
// fAccerman(2, 0);
// fAccerman(2, 1);
// fAccerman(2, 3);