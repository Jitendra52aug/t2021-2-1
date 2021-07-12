function Calculator() {
    this.methods = {
        "-" : (a, b) => a - b,
        "+" : (a, b) => a + b,
        "*" : (a, b) => a * b,
        "/" : (a, b) => a / b
    };
    this.calculate = function(str) {
        let opIndex = str.indexOf("+") > -1 ? str.indexOf("+") : str.indexOf("-") > -1 ? str.indexOf("-") : str.indexOf("*") > -1 ? str.indexOf("*") : str.indexOf("/");
        if(opIndex == -1){
            return "invalid operation";
        }
        let num1 = Number(str.slice(0, opIndex));
        let opr = str.slice(opIndex, opIndex+1);
        let num2 = Number(str.slice(opIndex+1, str.length).trim());

        if(!this.methods[opr] || isNaN(num1) || isNaN(num2)){
            return NaN;
        }
        return this.methods[opr](num1, num2);
    };
}

let calculator = new Calculator();
console.log(calculator.calculate("73+7"));