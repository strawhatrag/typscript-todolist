"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoInput'); // type assertion
const form = document.querySelector('form'); //non null assertion operator  "!"
const list = document.getElementById('todolist');
const todoList = readTodos();
form.addEventListener('submit', handleSubmit);
//we use SubmitEvent as the type for the event
function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
        text: input.value,
        complete: false
    };
    createTodo(newTodo);
    todoList.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todoList));
    input.value = '';
}
function createTodo(todo) {
    const newList = document.createElement("LI");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newList.append(todo.text);
    newList.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newList);
}
function readTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON == null)
        return [];
    return JSON.parse(todosJSON);
}
console.log(input);
