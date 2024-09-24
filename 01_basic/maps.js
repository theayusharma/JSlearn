const nums = [1,34,354,4,54,5,76,765,54]
const nums100 = nums.map((val)=>val+100)
const nums200 = nums.map((val)=>(val+100))
const nums300 = nums.map((val)=>{ 
    return val+100
})
const nums400 = nums.map(function newfunc(item){
    return item = item +100;
})
console.log(nums)
console.log(nums100)
console.log(nums200)
console.log(nums300)
console.log(nums400)