// Synchronous

// console.log("I");
// console.log("eat");
// console.log("ice cream");
// console.log("with a");
// console.log("spoon");


// Asyncronous

// console.log("I");
// console.log("eat");
// setTimeout(()=>{
//    console.log(('ice cream'));
// },4000)

// console.log("with a");
// console.log("spoon");




// Callback - Calling a function inside another function

function one(call_two){
    call_two()
    console.log("step 1 complete. please call step 2");
}

function two(){
    console.log("Step 2");
}
one(two);

