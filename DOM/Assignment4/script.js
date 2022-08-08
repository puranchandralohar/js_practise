let form = document.querySelector("form");

form.addEventListener('submit',additem);

function additem(e){
    e.preventDefault();
    let item = document.getElementById("item");
    
    if(item.value.trim().length > 1){
        let list  = document.querySelector('.list');

        let listItem = document.createElement('li');
        listItem.classList.add('list-item');


        let input = document.createElement('input');
        input.type = 'checkbox';
        input.name='check';
        input.id='check';

        let label = document.createElement('label');

        let editBtn = document.createElement('button');
        editBtn.classList.add('btn')
        editBtn.id = "edit"
        editBtn.innerText = 'Edit';

        let delBtn = document.createElement('button');
        delBtn.classList.add('btn')
        delBtn.innerText = 'Delete'
        delBtn.id = 'del';

        label.innerText = item.value;
        listItem.appendChild(input);
        listItem.appendChild(label);
        listItem.appendChild(editBtn);
        listItem.appendChild(delBtn);

        list.append(listItem);

        editBtn.addEventListener("click", (e) => {
            if (editBtn.innerText == "Edit") {
              editBtn.innerText = "Save";
              label.contentEditable = true;
              label.style.border = "1px solid black";
            } else {
              editBtn.innerText = "Edit";
              label.contentEditable =false;
              label.style.border = "";

            }
          });

        delBtn.addEventListener('click',(e)=>{
            e.target.parentElement.parentElement.removeChild(listItem);
        });

        

        let checkbox = document.getElementById("check");

        function clicked(e){
          if(e.target.checked == true){
            e.target.parentElement.parentElement.removeChild(listItem);
            complete.append(checkbox);
            complete.append(label);

          }
          
        }
        checkbox.addEventListener('click', clicked);
    

    }
}