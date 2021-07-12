function countNumbers(args) {
    let arr = [...args];
    let obj = {
        1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, 6 : 0, 7 : 0, 8 : 0, 9 : 0,
    };
    let i = 0;
    for(let value of arr){
        if (isNaN(value) || typeof value != "number") {
            return "Please Provide Integer Numbers";
        }
        for(let key in obj){
            if(value%key == 0){
                obj[key]++;
            }
        }
    }
    return JSON.stringify(obj);
}
console.log(countNumbers([1,2,8,9,12,46,76,82,15,20,30]));