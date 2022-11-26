// Promise
// a promise object represent an eventual completion or failure of an async operation and its value.

// const myPromise = new Promise((resolve, reject) => {
//   let number = 1;
//   if (number > 2) {
//     resolve("Promise is resolved");
//   } else {
//     reject("Promise Rejected");
//   }
// });

// myPromise
//   .then((returnedValue) => {
//     console.log(returnedValue);
//   })
//   .catch((value) => {
//     console.log(value);
//   });



// const hello = new Promise((resolve, reject) => {
//     let n = 15;
//     if(n<6){
//         resolve(setTimeout(()=>{
//             alert("Hello World")
//         },2000)
//        )
//     }
//     else{
//         reject("Failed")
//     } 
//   });
  
//   hello
//     .then(()=>{
//        console.log("Alert Message") 
//     })
//     .catch(() => {
//       console.log("Failed");
//     });
