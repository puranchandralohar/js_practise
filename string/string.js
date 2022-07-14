let person = 'puran';

//length
// console.log(person.length); //5

//Accessing a Character from a string through CharAt();

// console.log(person.charAt(2)); //--> r
// console.log(person.charAt(5)); //--> blank space

//other ways; Treat strings as an array-like object;
//access through by their index number;

// console.log(person[0]); //-->p
// console.log(person[5]); //-->undefined

let a = 'a';
let b = 'b';

// console.log(a==b); //false
// console.log(a>b); //false
// console.log(a<b); //true

let c = 'c';
let d = 'c';

// console.log(c==d); //true
// console.log(c>d); //false
// console.log(c<d); //false

// console.log(c==d.toUpperCase()); //false

// console.log(person.toUpperCase()); //PURAN

let player = 'Mahendra SINGH Dhoni';

// console.log(player.toLowerCase()); //mahendra singh dhoni
// console.log(player.toUpperCase()); //  MAHENDRA SINGH DHONI

let sum = '2 + 20';

console.log(sum); //-> 2 + 20

//Strings are immutable. Charcters can not be changed..
let fname = 'Ramesh';
fname[0] = 'S';

console.log(fname); // Ramesh



