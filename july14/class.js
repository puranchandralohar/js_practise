// let playersList = 'Virat, Kohli, KLRahul, Dhoni';

// let target = 'Dhoni';

// let newList = playersList.split(' ');
// console.log(newList);

// ispresent = false;

// for(let i=0;i<newList.length; i++){
//     if(newList[i] === target){
//         ispresent == true;
//         console.log(true);
//     }
// }
// console.log(ispresent);


//--Endswith---
// let email  = "clpuran09@gmail.com";

// if(email.endsWith("@gmail.com")){
//     console.log("valid email");
// }
// else{
//     console.log("Invalid Email");
// }

// //--Startswith--------
// let mobile  = '+91 8945632587';

// if(mobile.startsWith("+91")){
//     console.log("valid mobile");
// }
// else{
//     console.log("Invalid mobile");
// }


//match--
// let names = "The rain in SPAIN stays mainly in the plain";

// console.log(names.match(/ain/));

//null in case of word not there.

//search--
// let names = "The rain in SPAIN stays mainly in the plain";

// console.log(names.search(/ain/));

// let sentence = "abcbcbbcabbcabcaa";

// let countA=0,countB=0,countC=0;

// for(let i=0; i<sentence.length; i++){
//     if(sentence[i]== 'a'){
//         countA++
//     }
//     if(sentence[i]== 'b'){
//         countB++
//     }
//     if(sentence[i]== 'c'){
//         countC++
//     }
// }
// console.log(`No of A = ${countA}, No of B = ${countB}, No of C = ${countC}`);

/// Anagram Question

// let word = 'god';
// let word1 = 'dog';

// console.log(word.split(''));
// console.log(word1.split(''));


// if(word.split('').sort().join('') == word1.split('').sort().join('')){
//     console.log('anagram');
// }
// else{
//     console.log('not an anagram');
// }


// Finding Odd by Flag Concept------------------->
let arr3 = [8,2,3,4];
let isOdd = false;
for(let i = 0; i<arr3.length;i++){
    if(arr3[i]%2 == 1){
        isOdd = true;
        console.log(arr3[i]);
    }
    
}

