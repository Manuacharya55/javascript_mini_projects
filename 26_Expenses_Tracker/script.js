const expensesArray = JSON.parse(localStorage.getItem('expensesArray')) || [];
const amount = document.querySelector('#amount');
const description = document.querySelector('#desc');
const category = document.querySelector('#category');
const userDate = document.querySelector('#userdate');
const pen = document.querySelector('.fa-pen');
const form = document.querySelector('.form-holder');
const add = document.querySelector('.add');
const tbody = document.querySelector('tbody');
const expensesDetails = document.querySelector('.expense-details');

let isEdit = false;
let editIndex;

function toggleFormVisibility() {
    form.classList.toggle('show');
}

function clearForm() {
    amount.value = '';
    description.value = '';
    category.value = '';
    userDate.value = '';
}

function updateLocalStorage() {
    localStorage.setItem('expensesArray', JSON.stringify(expensesArray));
    displayData();
}

function createExpensesObject() {
    return {
        amount: amount.value,
        description: description.value,
        category: category.value,
        userDate: userDate.value
    }
}

function addData() {
    const obj = createExpensesObject();
    expensesArray.push(obj);
    updateLocalStorage();
    toggleFormVisibility();
    clearForm();
}


function formEditData(index) {
    const expenses = expensesArray[index];
    amount.value = expenses.amount;
    description.value = expenses.description;
    category.value = expenses.category;
    userDate.value = expenses.userDate;
}

function editData(index) {
    isEdit = true;
    toggleFormVisibility();
    formEditData(index);
    editIndex = index;
}

function deleteData(index) {
    expensesArray.splice(index, 1);
    updateLocalStorage();
    location.reload();
}


function displayData() {
    tbody.innerHTML = '';

    if(expensesArray.length == 0){
        expensesDetails.innerHTML = '<p>Please Add Your Expenses</p>'
    }else{
    expensesArray.forEach((value, index) => {
        tbody.innerHTML += `
        <tr>
            <td><span class="mobile-view">Amount : </span>Rs ${value.amount}</td>
            <td><span class="mobile-view">Description : </span> ${value.description}</td>
            <td><span class="mobile-view">Category : </span> ${value.category}</td>
            <td><span class="mobile-view">Date : </span> ${value.userDate}</td>
            <td>
                <i class="fa-solid fa-pen edit-icon" onclick="editData(${index})"></i>
                <i class="fa-solid fa-trash edit-icon" onclick="deleteData(${index})"></i>
            </td>
        </tr>`
    })
}

}

pen.addEventListener('click', () => {
    toggleFormVisibility();
})

add.addEventListener('click', (e) => {
    e.preventDefault();
    if (isEdit) {
        expensesArray[editIndex] = createExpensesObject();
        updateLocalStorage();
        clearForm();
        toggleFormVisibility();
        displayData();
        isEdit = false;
    } else {
        addData();
    }
    location.reload();
});

displayData();
