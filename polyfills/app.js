// custom forEach
// let arr = [5,4,3,2,1]



// Array.prototype.forEach = null;


// if(!Array.prototype.forEach){

//     Array.prototype.forEach = function(callback){
//         for(let val of this){
//             callback(val)
//         }
//     }
// }

// arr.forEach((value)=>{
//     console.log(value*2)
// })


let arr = [5,4,3,2,1]



// custom map

// Array.prototype.map = null;


// if(!Array.prototype.map){

    // Array.prototype.mymap = function(callback){
    //     let result =[];
    //     for(let val of this){
    //         let x = callback(val)
    //         result.push(x)
    //     }
    //     return result
    // }
// }

// arr.mymap((value)=>{
//     console.log(value*4)
// })



// Custom Filter

Array.prototype.myFilter = function(callback){
 
    var arr = [];                         // step 1
    for(let val of this)
    {
     if(callback(val) == true)        // step 2
     {
      arr.push(val);                  // step 3
     }
    } 
    return arr;                           // step 4
   }

   let result = arr.myFilter((a)=>{
    return a>4
   })

   console.log(result);