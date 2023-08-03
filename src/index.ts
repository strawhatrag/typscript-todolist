const btn = document.getElementById('btn')! as HTMLInputElement;
const input = document.getElementById('todoInput')! as HTMLInputElement;   // type assertion
const form = document.querySelector('form')!; //non null assertion operator  "!"

const list = document.getElementById('todolist')

// // "?" null or not
// btn?.addEventListener('click', () => {
//   alert(input.value)

// })

interface Todo {
  text: string,
  complete: boolean
}

const todoList: Todo[] = readTodos();

form.addEventListener('submit', handleSubmit);

//we use SubmitEvent as the type for the event
function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    complete: false
  }

  createTodo(newTodo);
  todoList.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todoList));
  input.value = ''

}


function createTodo(todo: Todo) {

  const newList = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newList.append(todo.text);
  newList.append(checkbox);
  list?.append(newList);
}


function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem('todos')
  if (todosJSON == null) return [];
  return JSON.parse(todosJSON)
}

console.log(input)






