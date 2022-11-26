// Promise
// a promise object represent an eventual completion or failure of an async operation and its value.

const myPromise = new Promise((resolve, reject) => {
  let number = 1;
  if (number > 2) {
    resolve("Promise is resolved");
  } else {
    reject("Promise Rejected");
  }
});

myPromise
  .then((returnedValue) => {
    console.log(returnedValue);
  })
  .catch((value) => {
    console.log(value);
  });
