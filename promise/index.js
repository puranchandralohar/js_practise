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


////////////////////////////////////////////////////////////////

// console.log('start')

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// console.log('end');

//////////////////////////////////////////////////////

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

////////////////////////////////////

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

//output --  Start,1,3,end,2

//////////////////////////////////////////////////////////////

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// promise1.then(res => {
//   console.log(2)
// })

// console.log('end');

//////////////////////////////////////////////////////////////

// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//   console.log(res)
// })

// console.log('end')

// output - start,middle,1,end, success
/////////////////////////////////////////////////////////

// console.log('start')

// Promise.resolve(1).then((res) => {
//   console.log(res)
// })

// Promise.resolve(2).then((res) => {
//   console.log(res)
// })

// console.log('end')

// op -- start, end, 1, 2
////////////////////////////////////////////////////
