// let studDetails = {
//     name:'Aman',
//     age:'25',
//     address:'Kolkata',
//     role:'Front-End Dev'
// };

// Accessing each key Value
// for(let key in studDetails){
//     console.log(key, studDetails[key]);
// }


// remove a property

// delete studDetails['name'];
// console.log(studDetails);






let arr = [1,2,3,4,5]
let arr2 = [...arr]; //shallow copy :- array copy nahi hoti uska reference copy ho jata hai
// let arr2 = [...arr] // deep copy:- array ki actual values new array ne store ho jati hai na ki reference
arr[2] = 100
console.log(arr)
console.log(arr2)
// var obj = {
//     name: "Vinay",
//     address: "Bangalore",
//     obj2 : {
//         name: "patel",
//         address : "address"
//     }
// }
// let obj3 = {...obj}
// obj3.obj2 = {...obj.obj2}
// obj3.obj2.name = "Hello"
// console.log(obj)
// console.log(obj3)


