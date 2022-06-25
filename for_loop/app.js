//*****************************************************//
// print message 10 Times.

// let msg = "Hello world!";
// let userMsg = process.argv[2];
// let i;
// for(i = 1;i<=10;i++){
//     // console.log(msg);
//     console.log(userMsg);
// }
// console.log(i); //result will be 11.

// ***************************************************//

// print numbers form 1 to 10.

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// ****************************************************//

// print even numbers between a given range

// let num1 = parseInt(process.argv[2]);
// let num2 = parseInt(process.argv[3]);

// let num1=90; //user decleared
// let num2=100; //user decleared

// for(i=num1; i<=num2; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// *******************************************************//

// print odd numbers in a given range

// let num1 = parseInt(process.argv[2]);
// let num2 = parseInt(process.argv[3]);

// for(i=num1;i<=num2;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

/*************************************************************/

// print sum of numbers in a given range

// let num1 = parseInt(process.argv[2]);
// let num2 = parseInt(process.argv[3]);
// let sum = 0;
// for(let i=num1; i<=num2;i++){
//      sum = sum + i;
    
// }
// console.log(sum);

/*************************************************************/
//Print Fibonacci Series

// function fibbo(a,b,count){
//     if(a<=10){
//         console.log(a)
//         let c = a + b;
//         return fibbo(b,c,count+1);
//     }
// }
// fibbo(0,1,1)

// Using For loop
let a=0;
let b=1;
let c;  

for(i=1;i<=10;i++){
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}




//***********************************************************/

