let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
]

// console.log(arr[0]);

//accessing elements through row and column;

// console.log(arr[0][0]); //-->1
// console.log(arr[0][2]); //-->3
// console.log(arr[2][2]); //-->9
// console.log(arr[3][1]); //-->undefined
// console.log(arr[3][0]); //-->0

//access all the elements;

for(let i = 0 ; i<arr.length; i++){
    for(let j = 0 ; j<arr[i].length; j++){
        console.log(arr[i]);
        break;
    }
}
