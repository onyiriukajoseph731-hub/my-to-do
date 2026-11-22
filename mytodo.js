// Calling the html element
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Function to write a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Prevent adding empty task (fixed: checking taskText instead of taskInput element)
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text"); // Fixed: added quotes
    span.addEventListener("click", function() {
        span.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn"); // Fixed: added quotes

    // Remove the li when the delete button is clicked
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li); // Fixed: passed the variable 'li' instead of the string "li"
    
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});