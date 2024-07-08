const todayDate = new Date()
const newDate = new Date()
// console.log(todayDate)
// console.log(todayDate.getTime())
// console.log(todayDate.getDay())
// console.log(todayDate.getMonth())
// console.log(todayDate.getYear())
// console.log(todayDate.toDateString())
let a=todayDate.toLocaleString('default',{
    weekday:'long',
    month:'2-digit'
})
console.log(todayDate)
console.log(a)