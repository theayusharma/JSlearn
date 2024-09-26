// const arr = [1,2,3,4,5,6]

// const ini=0
// arr.forEach(    (item,index,arrayy) =>
//     console.log(item,index,arrayy)
// )

const myNums = [1,2,3,4,5]

const myTotal = myNums.reduce(function ( acc, curr){
    console.log(`acc is ${acc} curr val is ${curr}`)
    return acc+curr
},1)

const myTotal2 = myNums.reduce ((acc,curr) => acc+curr, 1)
console.log(myTotal)
console.log(myTotal2)