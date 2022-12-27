/* 
        “Memoization is an optimization technique 
        where expensive function calls are cached 
        such that the result can be immediately returned 
        the next time the function is called with the same 
        arguments”. 
*/

function add (){
    let cache = {}

    return (num)=>{
        if(num in cache){
            console.log("Cached Data")
            console.log(cache[num])
        }
        else{
            let result = num * 2;
            cache[num] = result;

            console.log("storing in cache")
            console.log(result)
        }
    }
}

let output = add()

output(5)
output(6)
output(6)
output(5)