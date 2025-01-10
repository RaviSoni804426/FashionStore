
document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    
    const addTask = () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;

        
        listItem.querySelector(".delete-btn").addEventListener("click", () => {
            listItem.remove();
        });

        
        todoList.appendChild(listItem);

        
        todoInput.value = "";
    };

    
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
