// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(arr[0]);

//accessing elements through row and column;

// console.log(arr[0][0]); //-->1
// console.log(arr[0][2]); //-->3
// console.log(arr[2][2]); //-->9
// console.log(arr[3][1]); //-->undefined
// console.log(arr[3][0]); //-->0

//access all the elements;

// for(let i = 0 ; i<arr.length; i++){
//     for(let j = 0 ; j<arr[i].length; j++){
//         console.log(arr[i]);
//         break;
//     }
// }

//Adding elemets to an array;
// arr.push([15,10,14])

// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]+" ")
// }

// Sum of all the elements in an array;


// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let sum = 0;

// for(let i = 0; i<arr.length; i++){
//     for(j = 0; j<arr[i].length; j++){
//         sum+= arr[i][j]
//     }
// }
// console.log(sum);

//Sum all the diagonal (left to right) elements in an array

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let sum = 0;

// let rows = arr.length;
// let start =0;
// for(let i = 0; i<rows; i++,start++){
//         sum+= arr[start][i]

// }
// console.log(sum);

//-->Sum all the diagonal elements in an array (right to left).

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [20,8,9]
// ]

// let sum = 0;

// let rows = arr.length;
// let start =arr[0].length - 1;
// for(let i = 0; i<rows; i++){
//         sum+= arr[i][start];
//         start-=1


// }
// console.log(sum);

//-->print this format -  1,2,3,4,8,7,6,5,9,10,11,12,16,15,14,13

// let arr1 = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// let rows = arr1.length;
// let cols = arr1[0].length;

// for(let i = 0; i<rows;i++){
//     if(i%2==0){
//         for(let j=0;j<cols;j++){
//             console.log(arr1[i][j]);
//         }
//     }
//     else {
//         for(let j=cols-1; j>=0; j--){
//             console.log(arr1[i][j]);
//     }
// }
// }

// -->Print this format -- 7,8,9,6,3,2,1,4,5
// let arr2 = [
//     [7,8,9],
//     [4,5,6],
//     [1,2,3]
// ]







// let rows = square.length;

// let sq=[];

// for(let i=0;i<rows; i++){
    //     for(let j=0;j<square[i].length;j++){
//         sq.push(square[i][j]**2)
//     }
// }
// console.log(sq);
let square = [
    [1,2],
    [2,4,5],
    [7,8]
]

let sq = square.map(myfunction);

function myfunction(ele){
    return ele.reduce((total,val)=>{
        return total + val**2;
    })
}
console.log(sq);
