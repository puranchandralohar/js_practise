// Q.No.1 

// for (let i = 1; i <= 5; i++) {
//   let stars = " ";
//   for (let j = 1; j <= 5; j++) {
//     if (i == j || i + j == 6) {
//       stars += "*";
//     } else if (i != j) {
//       stars += " ";
//     }
//   }
//   console.log(stars);
// }
/**************************************************************/
// Q.No.2

// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for (let j = 1; j <= 5; j++) {
//     // first method----->
//     // if(i==1 && j==3 || i==2 && j==2
//     // || i==2 && j==4 || i==3 && j==1
//     // || i==3 && j==5 || i==4 && j==2
//     // || i==4 && j==4 || i==5 && j==3)
//     //Second Method----->
//     if ((i % 2 == 0 && j % 2 == 0) || i == j + 2 || j - 2 == i) {
//       stars += "*";
//     } else {
//       stars += " ";
//     }
//   }
//   console.log(stars);
// }

/**************************************************************/

// Q.No-3
// let count = 1;
// for(let i=1;i<=5;i++){
//     let pattern="";
//     for(let j=1;j<=i;j++){
//         pattern += ` ${count}`;
//         // pattern += " "+count;
//         count= count+1    
//     }   
//     console.log(pattern);
// }

/***************************************************************/
// Q.NO-4

// let firstNum = 0;
// let secondNum = 1;

// for(let i=firstNum;i<=5;i++){
//     let pattern = " "
//     for (let j=1;j<=i;j++){
//         let nextNum = firstNum+ secondNum;
//         pattern = pattern + ` ${firstNum}`;
//         firstNum = secondNum;
//         secondNum = nextNum;
//     }
//     console.log(pattern);
// }

/*************************************************************/
// Q.No-5
