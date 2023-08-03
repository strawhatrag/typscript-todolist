"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoInput'); // type assertion
const form = document.querySelector('form'); //non null assertion operator  "!"
const list = document.getElementById('todolist');
// // "?" null or not
// btn?.addEventListener('click', () => {
//   alert(input.value)
// })
form.addEventListener('submit', handleSubmit);
//we use SubmitEvent as the type for the event
function handleSubmit(event) {
    event.preventDefault();
    const newTodoText = input.value;
    const newList = document.createElement("LI");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newList.append(newTodoText);
    newList.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newList);
}
console.log(input);
