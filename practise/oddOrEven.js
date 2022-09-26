const num =  7;


const isPrime =(num)=>{
    if(num === 1) return false;
    if(num === 2) return true;

    const newNum = Math.floor(num/2);
    // let count = 0;
    
    for(let i=2; i <= newNum; i++){
        if(check(num,i)){
            // count++
            return false;
        }
    }
return true;
//  return count === 1
}


if(isPrime(num)){
    console.log("Prime");
}else{
    console.log("Not prime");
}


function check(a,b){
    return a%b==0;
}

// let str = "banana";

// a=3
// b=1
// n=2