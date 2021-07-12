function generateList(arg) {
    let arr = [];
    let a = 1;
    if (isNaN(arg) || typeof arg != "number") {
        return NaN;
    }
    while (arr.length < arg && arg >= 1) {
        if (a % 2 !== 0) {
            arr.push(a);
        }
        a++;
    }
    return (arg % 2 === 0) ? arr.slice(0, arr.length - 1).join(', ') : arr.join(', ');
}
console.log(generateList(4));