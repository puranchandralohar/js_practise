// let string = "maggie";


// let b=0,a=0,n=0;
// for(let values of string){
//     // console.log(values);
//     if(values==='a')
//     a=a+1;
//     else if(values==="b")
//     b++;
//     else if(values === 'n')
//     n++
// }
// console.log("a = "+a,"b = "+b,"n = "+n);


// let arr = string.split("");

const str = "mango";

const getCharCount = (str)=>{

    const obj ={};
    for(let i=0; i < str.length; i++){
        if(obj[str[i]]){
            obj[str[i]] = obj[str[i]] +1 ;
        } else{
            obj[str[i]] = 1;
        }
    }
    return obj;
}

console.log(getCharCount(str));
