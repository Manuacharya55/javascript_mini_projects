const userTaskName = document.querySelector('#task-name');
const addTaskButton = document.querySelector('.add-task');
const allTaskHolder = document.querySelector('.all-task-holder');
const taskArray = JSON.parse(localStorage.getItem('allUserTask')) || [];

// addUserTask
const addUserTask = () => {
    const TASKNAME = userTaskName.value;
    if (TASKNAME === '') return alert('Please Enter Task Name')
    const TASKOBJ = {
        taskname: TASKNAME,
        complete: false
    }

    userTaskName.value = '';

    taskArray.push(TASKOBJ);
    saveUserTask();
    displayUserTask();
}

// displayUserTask
const displayUserTask = () => {
    allTaskHolder.innerHTML = '';

    if(taskArray.length === 0 ) allTaskHolder.innerHTML = 'No Task found'
    taskArray.forEach((task, index) => {
        const TASKCLASS = task.complete ? 'complete' : 'incomplete';

        allTaskHolder.innerHTML += `<div class="task ${TASKCLASS}">
                                        <div class="box-holder">
                                            <input type="radio" name="" id="${index}" class="taskCheckbox" onclick="updateUserTask(${index})" ${task.complete ? 'checked' : ''}>
                                            <label for="taskCheckbox${index}">${task.taskname}</label>
                                        </div>

                                        <button onclick="deleteUserTask(${index})" class="delete-btn"><i class="fa-solid fa-trash"></i></button>
                                    </div>`
    })
}

//deleteUserTask
const deleteUserTask = (index) => {
    taskArray.splice(index, 1);
    saveUserTask();
    displayUserTask();
}


const updateUserTask = (index) => {
    const STATUS = !taskArray[index].complete ? true : false;
    taskArray[index].complete = STATUS;
    saveUserTask();
    displayUserTask();
}


// save array in local storage
const saveUserTask = () => {
    localStorage.setItem('allUserTask', JSON.stringify(taskArray));
}

addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    addUserTask();
})

window.addEventListener('load', () => {
    displayUserTask();
})