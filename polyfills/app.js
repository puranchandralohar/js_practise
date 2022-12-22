let arr = [5,4,3,2,1]



Array.prototype.forEach = null;


if(!Array.prototype.forEach){

    Array.prototype.forEach = function(callback){
        for(let val of this){
            callback(val)
        }
    }
}

arr.forEach((value)=>{
    console.log(value*2)
})

