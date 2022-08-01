// What is  JavaScript ?
/* JavaScript is a programming language used to devlop interactive
and dynamic web pages.

    JavaScript codes are written inside <script></script> tag.
    Script tag can be written inside head tag or before the html 
    closing tags. but the best way to write it is before html closing
    tag. So that Javascript codes rendred after successfully loaded
    the page. */
    
//

//What is Hoisting ?
/** It is phenomenon where you can access the variables and functions 
  before its decleration. 
    Since JS allocate a memory for variables in the start of the code.
    by using var ,it will be undefined .
*/
    // example

    // console.log(a);
    // fun()

    // var a = 10 ;
    // function fun(){
    //     console.log("JS is Fun")
    // }

//Diffrence between for-in and for-of loop

// for of - it is used to itreate through values. Used for Array and strings.

//for in- it is used to itreate through keys / indexs. used for objects.

// examples
//in Object--

// let phone = {
//     model:1110,
//     company:"Nokia",
//     battery:"2000mh",
//     network:"2G"
// }

// for(let keys in phone){
//     console.log(phone[keys]);
// }


//in Arrays - 

// let friends  = ["Satya","Hema","Anish","Gayatri"]


// for(let keys in friends){
//     console.log(keys);
// }
//0,1,2,3

// for(let key of friends){
//     console.log(key);
// }
//Satya, Hema , Anish , Gayatri

// Flatten-Array

// function flateddArray(arr){
//     let fltenArr = [];
//     for(let i =0 ; i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             fltenArr = [...fltenArr,...flateddArray(arr[i])];
//         }
//         else{
//             fltenArr.push(arr[i])
//         }
//     }
//     return fltenArr;
// }

// let arr = [[1,2,3,4],[],[5,6],["A","B"]]
// console.log(flateddArray(arr));


// another method -
// let arr1 = [[1,2,3],[4,5],[],[7],["Puran",1]];

// let flatenArr = [].concat(...arr1);

// console.log(flatenArr);

// Event loop

// example

// console.log("Hi");

// setTimeout(()=>{
//     console.log("Nice to Meet You");
// },0)

// console.log("Bye")

//IIFE function

// (function (a,b){
//     console.log(a+b)
// })(10,5)


//deep copy and shallow copy
// let arr = [1,2,3]
// let arr1 = [...arr];
// arr1[0]=5;

// console.log(arr1);
// console.log(arr);

// let arr = [1,5,8,0];

// target = 10;
// function findElement(){
//     for(let i =0 ;i<arr.length;i++){
//         if(arr[i]==target){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }
// console.log(findElement());


//Array Destructing

// let arr = ["Puran","Aman","Saourav","Pawan","Anurag","Santanu"];

// [a,b,...c] = arr;

// console.log(a , c);