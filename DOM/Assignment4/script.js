let form = document.querySelector("form");

form.addEventListener('submit',additem);

function additem(e){
    e.preventDefault();
    let item = document.getElementById("item");
    if(item.value.trim().length > 1){
        let listItem  = document.querySelector('.todolist');
        let div = document.createElement('div');
        div.classList.add('list');

        let todo = document.createElement('input');

        todo.type = 'checkbox';
        todo.name='mylist';
        todo.id='checkbox';

        let label = document.createElement('label');
        label.id = 'label'
        label.htmlFor = "checkbox";

        label.innerText = item.value;
        div.appendChild(todo);
        div.appendChild(label);
        listItem.append(div);
    }

}