// select element & asing them to variable

let newTask = document.querySelector(".new-task");
let form = document.querySelector("form");
let listContainer = document.querySelector(".list-container");

// function

let createTask = (task) => {
    let ul = document.createElement("ul");
    ul.classList.add('item');
    let li = document.createElement("li");
    let label = document.createElement("label");
    label.innerText = task;

    let div = document.createElement("div");
    div.classList.add("icon");
    let span = document.createElement("span");
    span.classList.add("edit-icon");
    span.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    let p = document.createElement("p");
    p.classList.add("delete-icon");
    p.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

    ul.appendChild(li);
    li.appendChild(label);
    ul.appendChild(div);
    div.appendChild(span);
    div.appendChild(p);

    span.addEventListener("click", () => {
        label.setAttribute("contenteditable", "true");
    });

    return ul;
}

let addTask = () => {
    let listItem = createTask(newTask.value);
    listContainer.appendChild(listItem);
    newTask.value = "";

    listContainer.style.display = "block";
    deleteTask(listItem, deleteBtn);
}

function deleteBtn() {
    let icon = this.parentNode;
    let ul = icon.parentNode;
    let mainParent = ul.parentNode;
    mainParent.removeChild(ul);
}

let deleteTask = (taskItem, deleteBtnClick) => {
    let deleteBtn = taskItem.querySelector(".delete-icon");
    deleteBtn.onclick = deleteBtnClick;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask();
});