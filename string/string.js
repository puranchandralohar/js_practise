// let person = 'puran';

//length
// console.log(person.length); //5

//Accessing a Character from a string through CharAt();

// console.log(person.charAt(2)); //--> r
// console.log(person.charAt(5)); //--> blank space

//other ways; Treat strings as an array-like object;
//access through by their index number;

// console.log(person[0]); //-->p
// console.log(person[5]); //-->undefined

// let a = 'a';
// let b = 'b';

// console.log(a==b); //false
// console.log(a>b); //false
// console.log(a<b); //true

// let c = 'c';
// let d = 'c';

// console.log(c==d); //true
// console.log(c>d); //false
// console.log(c<d); //false

// console.log(c==d.toUpperCase()); //false

// console.log(person.toUpperCase()); //PURAN

// let player = 'Mahendra SINGH Dhoni';

// console.log(player.toLowerCase()); //mahendra singh dhoni
// console.log(player.toUpperCase()); //  MAHENDRA SINGH DHONI

// let sum = '2 + 20';

// console.log(sum); //-> 2 + 20

//Strings are immutable. Charcters can not be changed..
// let fname = 'Ramesh';
// fname[0] = 'S';

// console.log(fname); // Ramesh

// let array = [1,2,3,4];
//  let array1 = [5,6,7,8]

//  console.log(array,array1);
//  console.log(...array,...array1);

 //-------->>>Slice

//  let sentence = "I love JavaScript";

//  let newSent =  sentence.slice(2,6); //love
//  let newSent =  sentence.slice(-10); //JavaScript
//  let newSent =  sentence.slice(2); //love javaScript
//  console.log(newSent);

//------------->>>Split

let string = "I am Puran Chandra";

// console.log(string.split(" ")); // ["I","am","Puran" ,"Chandra"]
// console.log(string.split(" ").reverse()); // ["Chandra", "Puran,"am","I"]
// console.log(string.split(" ").reverse().join(" ")); // Chandra Puran am I
let newstr = string.split(" ");

for(let i =0 ;i<newstr.length;i++){ 
    newstr[i] = newstr[i].split("").reverse().join("");
}
console.log(newstr);




