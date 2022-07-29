let changeName = document.getElementsByClassName("class1")[0];
changeName.innerText = "Puran Chandra Lohar";

let addPara = document.querySelector(".class2");
addPara.innerHTML = "<p>Hey, I'm Puran Chandra Lohar, from AirCampus. I am a Aspiring Full Stack Developer </p>";

let changeColor = document.querySelector(".class3");
changeColor.style.color = "red";

let selectedDivs = document.querySelectorAll(".divs");

for(let i =0 ; i < selectedDivs.length; i++){
    selectedDivs[i].style.border = "1px solid black";
    if(i==0){
        selectedDivs[i].innerText = "Forth";
    }
    else if(i==1){
        selectedDivs[i].innerText = "Fifth";
    }
    else if(i==2){
        selectedDivs[i].innerText = "Sixth";

    }

}

let appendedText = document.getElementById("id1");
appendedText.append("AirCampus");

let addHtml = document.querySelectorAll("div")[8];
addHtml.innerHTML = "<div class='new_htlm'> <p>This is my first assignment</p> </div>";

let ninthDiv = document.getElementsByTagName("div")[10];
ninthDiv.innerHTML="<h3>My Experience with AirCampus</h3>";
ninthDiv.style.color="red";
ninthDiv.style.fontSize="32px";
ninthDiv.style.textDecoration="underline";

let myExp = document.getElementsByTagName("p")[0];
console.log(myExp)
myExp.innerText = "AirCampus"
