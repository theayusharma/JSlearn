const mynums = [1,2,3,4,5,6]
const newnums = mynums.filter( (nums) => (
    // console.log(nums>4)
    nums>4
))
const arr = []
mynums.forEach((num)=>{
    if (num>4){
        arr.push(num)
    }
})
console.log(newnums) 
console.log(arr)
