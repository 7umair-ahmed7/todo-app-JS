let saveButton = document.getElementById("saveBtn")
let editButton = document.getElementById("editBtn")
let deleteButton = document.getElementById("deleteBtn")
let inputBox = document.getElementById("todoContent")
let todosList = document.querySelector(".todos-list")
let checkDone = document.getElementById("checkDone")
let validation = document.getElementById("validation")
let emptyCon = document.querySelector(".empty")
let todoValue;

function saveData() {
    localStorage.setItem("todos", todosList.innerHTML)

}
function loadData() {
    let loadD = localStorage.getItem("todos")
    todosList.innerHTML += loadD

}

loadData();


saveButton.addEventListener("click", () => {
    todoValue = inputBox.value;
    if (inputBox.value.length > 3) {

        todosList.innerHTML += ` <li><input type="checkbox"  id="checkDone" ><span>${todoValue}</span>
                            <div class="buttons">
                                <button id="editBtn" class="btn editBtn">Edit</button>
                                <button class="btn deleteBtn" id="deleteBtn">Delete</button>
                            </div>
                        </li>`
        inputBox.value = "";

       
        saveData()
    } else {
        validation.innerHTML = "More than 3 characters are must!"
    }

})

todosList.addEventListener("click", (e) => {

    if (e.target.classList.contains("editBtn")) {
        console.log(e.target.parentElement.previousElementSibling.innerHTML)
        inputBox.value = e.target.parentElement.previousElementSibling.innerHTML;
        e.target.parentElement.parentElement.remove()
        saveData();
    }
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.parentElement.remove()
        saveData();
    }
    if (e.target.id === "checkDone") {
        if (e.target.checked) {
            e.target.nextElementSibling.style.textDecoration = "line-through";
            saveData();
        } else {
            e.target.nextElementSibling.style.textDecoration = "none";
            saveData();
        }
    }
})








