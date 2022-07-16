//Finding Duplicates-----------
//['a','b','a','c','b']

// let chars = ["a","b","a","c","b"];
// let uniarr = [];

// for(let i =0;i<chars.length; i++){
//     if(!uniarr.includes(chars[i])){
//         uniarr.push(chars[i]);
//     }
// }
// console.log(uniarr);

//By Using callback

// let result = chars.filter((char,index)=>{

//     return chars.indexOf(char) ===index;

// });

// console.log(result);


//Finding Largest number----------
// let nums = [11,17,25,33,19,7];

// nums.sort((a,b)=> a - b)

// console.log(nums[nums.length-1]);


//Reverse each word in a sentence..

// let news = 'India won the world cup';

// let newsArray = news.split(" ");
// console.log(newsArray);

// for(let  i=0; i<newsArray.length;i++){
//     newsArray[i] = newsArray[i].split("").reverse().join("");

// }
// console.log(newsArray);

//Rotating the String---

let string = "AirCampus";

//rotate by 1 char -> irCampusA
//rotate by 2 char -> rCampusAi
//rotate by 3 char -> CampusAir
let rotatingString = string.slice(0,1);
let slicedString = string.slice(1);

console.log(`${slicedString}${rotatingString}`);


// Spiral Snake----------------->>
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  
  // 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
  let top = 0,bottom = 3, left = 0, right = 3, direction = 0;
  
    while(left <= right && top<=bottom) {
      if(direction == 0) {
          for(let i=left; i<=right; i++) {
              console.log(matrix[top][i]);
          }
          top += 1;
          direction = 1;
      }
  
      if(direction == 1) {
          for(let i=top; i<=bottom; i++) {
              console.log(matrix[i][right]);
          }
          right -= 1;
          direction = 2;
      }
  
      if(direction == 2) {
          for(let i=right; i>= left; i--) {
              console.log(matrix[bottom][i]);
          }
          bottom -= 1;
          direction = 3;
      }
  
      if(direction == 3) {
          for(let i=bottom; i>=top; i--) {
              console.log(matrix[i][left]);
          }
          left += 1;
          direction = 0
      }
    }
  