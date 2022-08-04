let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".btn"));

buttons.map((btn)=>{
    btn.addEventListener('click',(event)=>{
        let key = event.target.innerText;
        // console.log(key);
        
        if(key =='C'){
            display.innerText="";
        }
        else if(key=="DEL"){
            display.innerText = display.innerText.slice(0,-1);

        }else if(key=="√"){
            display.innerText = Math.sqrt(display.innerText);

        }
        else if(key=='='){
            display.innerText = eval(display.innerText);
        }
        else{
            display.innerText += key;
        }
    })
})