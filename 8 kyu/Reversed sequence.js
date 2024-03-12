// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// cara 1
const reversedSeq = n =>{
    let result = []
    for(let i = n; i > 0; i--){
        result.push(i)
    }
    return result;
}

console.log(reversedSeq(5))


// cara 2
const reversedSeq2 = n =>{
    return Array(n)
    .fill()
    .map((value, index) => index + 1) // map adalah cara membuat array dari pemanggilan fungsi
    .reverse()
}

console.log(reversedSeq2(5))
