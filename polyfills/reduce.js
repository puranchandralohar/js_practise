
let arr = [4,5,6,3,2]

Array.prototype.myReduce = function(callback,initialValue){

    let previousValue = initialValue;

    for(let i = previousValue ? 0 : 1; i< this.length; i++){
        previousValue = callback(previousValue ? previousValue : this[0], this[i],i,this)
    }
    return previousValue
}

const sum = arr.myReduce((total,value)=>{
    return total + value
})
console.log(sum)



const result = arr.reduce((total,value)=>{
    return total + value
})

console.log(result)