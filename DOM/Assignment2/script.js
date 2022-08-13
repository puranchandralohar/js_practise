let form = document.querySelector("form");
console.log(form);

let userName = document.querySelector(".user_name");
let email = document.querySelector(".user_email");

let phone = document.querySelector(".user_phone");

let button = document.querySelector(".btn");

let msgBox = document.querySelector(".alertMsg");

let tbody = document.querySelector("tbody");

form.addEventListener("submit", (e) => {
  // console.log(e.target);

  e.preventDefault();
  if (!userName.value || !email.value || !phone.value) {
    msgBox.innerText = "Empty Input Field(s)";
    msgBox.style.color="red";
    setTimeout(() => {
      msgBox.innerText = "";
    }, 2000);
  } else {
    msgBox.innerText = "Data Inserted Successfully!!";
    msgBox.style.color = "green";
    setTimeout(() => {
      msgBox.innerText = "";
    }, 2000);

    tbody.innerHTML += `<tr>
    <td>${userName.value}</td>
    <td>${email.value}</td>
    <td>${phone.value}</td>
    <td><input type="button" id="rm-btn" value="Remove" onclick="removeData()"></td>
    </tr>`;

  }
});


function removeData(){

  document.querySelector("#rm-btn").closest("tr").remove();
  msgBox.innerText= "Item deleted successfully"
  setTimeout(() => {
    msgBox.innerText = "";
    msgBox.style.color = "red";
  }, 2000);
}
