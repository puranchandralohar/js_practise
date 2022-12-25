let btn = document.getElementById("plus");
let btn1 = document.getElementById("minus");
let btn2 = document.getElementById("reset");

let count=0;
btn.addEventListener("click",(e)=>{
    count++;
    document.getElementById("count_val").innerText = count;
})

btn1.addEventListener("click",(e)=>{
    count--;
    document.getElementById("count_val").innerText = count;
})

btn2.addEventListener("click",(e)=>{
  count=0;
  document.getElementById("count_val").innerText = count;
})
