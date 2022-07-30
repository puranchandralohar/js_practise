let changeName = document.getElementsByClassName("class1")[0];
changeName.innerText = "Puran Chandra Lohar";
changeName.style.fontWeight = "bold";

let addPara = document.querySelector(".class2");
addPara.innerHTML = "<p>Hey, I'm Puran Chandra Lohar, from AirCampus. I am a Aspiring Full Stack Developer </p>";

let changeColor = document.querySelector(".class3");
changeColor.style.color = "red";

let selectedDivs = document.querySelectorAll(".divs");

for(let i =0 ; i < selectedDivs.length; i++){
    selectedDivs[i].style.border = "1px solid black";
    selectedDivs[i].style.margin = "5px 0";
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
ninthDiv.style.backgroundColor="#dde4e6";

let myExp = document.getElementsByTagName("p")[2];
myExp.innerText = "First of All I would like to say thank you AirCampus for beleiving in me and giving me this opportunity. This is an Eye-Opening for me. My Experience with AirCampus till now is awesome. I have learnt so many things. Mentors are really amazing. Their teaching style and friendly nature is really great."
