
let arr = [4,5,6,7,8]

Array.prototype.myReduce = function(callback,initialValue){

    //if the array is empty, it should throw an error
    if(this.length == 0){
        throw new TypeError("Reduce of empty array with no initial value")
    }

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