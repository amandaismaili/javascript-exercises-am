const sumAll = function(a, b) {
    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"

    let summ = 0;
    for(let i = a; i <= b; i++){
        summ += i;
    }
    return summ
};

console.log(sumAll(1, "4"))

// Do not edit below this line
module.exports = sumAll;
