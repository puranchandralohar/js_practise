
//     //Function to find a continuous sub-array which adds up to a given number.
//     const subarraySum = (arr,s)=>{

//         //your code here
//         let total=0;
//         let left = 0;
//         let right=0;
        
//        for(let i=0; i<arr.length; i++){
//             total = total + arr[i]
//             if(total == s){
//                 return i
//             }
//             if(total>s){
//                 i=1;
//             }


//        }
// }

// console.log(subarraySum([1,2,3,7,5],12))


function getMinMax(arr,n){
    //code here
    let min;
    let max;
    let temp;
    
    for(let i=0; i<arr.length;i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i]>arr[j+1]){
                temp = arr[i]  //3
                arr[i] = arr[j+1];  
                arr[j+1] = temp;
            }
        }
        console.log(arr)
        min = arr[0];
        max = arr[arr.length-1]
    }
    console.log(min,max)
    
}


getMinMax([3, 2, 1, 56, 10000, 167],6)

