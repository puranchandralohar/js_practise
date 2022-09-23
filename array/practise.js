//Reverse

// const arr = [1,2,3,4]
// arr.reverse();
// console.log(arr);

//push
// arr.push(5,6,7,8,9);

//unshift
// arr.unshift(0);
// console.log(arr);

//Include

// const arr1 = [1,2,3,4,5]

// console.log(arr1.includes(5)); //true
// console.log(arr1.includes(10)); //false

// console.log(arr1.includes(2,1)); //true
// console.log(arr1.includes(2,2)); //false

//isArray
// console.log(Array.isArray(arr1));

//from

// let newArray = Array.from(arr1);
// newArray[2]=10;

// console.log(arr1);
// console.log(newArray);

//indexof and lastindexof
// let names = ["Aman", "Sohan", "Ronit", "Ram","Krishna","Ram","Shiva","Ram"];

// console.log(names.indexOf("Ram"),names.lastIndexOf("Geeta"))

//if the element is not in the array , their default index will be -1;
//in the above case index of Geeta is -1;

//toString
//it is used to convert an array to a string;
// let str = [1,2,3,4];

// console.log(str.toString());

//map and filter

// const numbers = [1,-1,2,3];

// const filtered = numbers.filter(n=> n>=0);

// console.log(numbers);
// console.log(filtered);

// const items = filtered.map(n => n*n)
// console.log(items);

// const itemsAsObject  = filtered.map(n=> {
//     let obj = { value : n }
//     return obj;
// })

// console.log(itemsAsObject);

// const filterArray = numbers.filter(n => n>=1).map(n=>({value:n*2}));

// console.log(filterArray)

// ###############################################################################

// Array at()method 
// -- returns element of an array by an index.

let arr = [4,5,6,7,8,12]

console.log(arr.at(1));

let words = ["My", "Name", "is","Puran"];

console.log(words.at(3))




