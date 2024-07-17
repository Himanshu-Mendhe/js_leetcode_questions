/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let op = [];
    for (let i = 0; i < arr.length; i++){
        if(fn(arr[i],i)){
            op.push(arr[i])
        }
    };
    return op;
};