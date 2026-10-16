const removeFromArray = function(arr, ...rem) {
    for(let i = 0; i < arr.length; i++){
        if(rem.includes(arr[i])){
            arr.splice(i, 1);
            i--;
        }
    }
};
const arr = [1, 2, 3, 4]
removeFromArray(arr, 7, 2)
console.log(arr)

// Do not edit below this line
module.exports = removeFromArray;
