
const getDate =()=>{
    document.querySelector('.date').innerHTML = new Date()
}



//      Date Methods

let date = new Date();

console.log(date)
console.log(date.toDateString())
console.log(date.toLocaleDateString())
console.log(date.toTimeString())
console.log(date.toLocaleTimeString())

console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getSeconds())
console.log(date.getMilliseconds())

console.log(date.getDate())
console.log(date.getDay())
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(date.toUTCString())

