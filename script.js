const taskInput = document.getElementById('task');
const pendingList = document.getElementById('pending-list');
const completedList = document.getElementById('completed-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="edit-button" onclick="editTask(this)">Edit</button>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `;

    li.addEventListener('click', () => toggleComplete(li));

    pendingList.appendChild(li);
    taskInput.value = '';
}

function toggleComplete(li) {
    li.classList.toggle('completed');
    if (li.parentElement === pendingList) {
        completedList.appendChild(li);
    } else {
        pendingList.appendChild(li);
    }
}

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const newText = prompt('Edit the task:', span.textContent);
    if (newText !== null) {
        span.textContent = newText;
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
