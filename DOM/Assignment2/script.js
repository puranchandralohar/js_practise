
let userName = document.getElementsByClassName("user_name");
let email = document.getElementsByClassName("user_email");
let phone = document.getElementsByClassName("user_phone");

let button = document.getElementsByClassName("btn");
// console.log(button);

// button.addEventListener("click",()=>{alert("hello")});
button.addEventListener('click',errMsg);
   
function errMsg(){
    if(userName.value =='' || email.value=="" || phone.value ==""){
        alert("Empty Fields");
    }
}
