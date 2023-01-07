function calculator(message,callback){
    console.log(message);
    console.log(callback());
}

function add(n1,n2){
    let sum = n1 + n2;
    return sum;
}

function sub(n1,n2){
    let min = n1 - n2;
    return min;
}

calculator("Addition is ",()=>add(4,5));
calculator("subtraction",()=>sub(10,5))