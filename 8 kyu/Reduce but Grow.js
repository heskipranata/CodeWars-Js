    // Given a non-empty array of integers, 
    //return the result of multiplying the values together in order. 
    //Example:
    // [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    let result = x[0]
    for(let i = 1; i < x.length; i++){
        result *= x[i];
    }
    return result;
}

// test
console.log(grow([1, 2, 3])) //6
console.log(grow([4, 1, 1, 1, 4])) //315
console.log(grow([2, 2, 2, 2, 2, 2]))