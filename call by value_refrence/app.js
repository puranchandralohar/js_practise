//Pass By Value

// let a=5;
// let b=a;

// ++b;

// console.log(a)
// console.log(b)


//Pass By refrence

// let a = [4,5]

// let b = a;

// b[0] = 10;

// console.log(a)
// console.log(b)

let a = {
  "math":80,
  "english":40
}

let b = a;
b["math"] = 45;

console.log(a)
console.log(b)