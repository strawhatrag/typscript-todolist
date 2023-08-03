const btn = document.getElementById('btn')! as HTMLInputElement;
const input = document.getElementById('todoInput')! as HTMLInputElement;   // type assertion
const form = document.querySelector('form')!; //non null assertion operator  "!"

const list = document.getElementById('todolist')

// // "?" null or not
// btn?.addEventListener('click', () => {
//   alert(input.value)

// })
interface Todo {
  text: string;
  complete: boolean;
}

const todoList: Todo[] = readTodos();

form.addEventListener('submit', handleSubmit);

function handleSubmit(event: Event) {
  event.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    complete: false,
  };

  createTodo(newTodo);
  todoList.push(newTodo);

  saveTodos();
  input.value = '';
}

function createTodo(todo: Todo) {
  const newList = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.complete;
  checkbox.addEventListener('change', () => {
    todo.complete = checkbox.checked;
    saveTodos();
  });
  newList.append(todo.text);
  newList.append(checkbox);
  list?.append(newList);
}

function readTodos(): Todo[] {
  try {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON == null) return [];
    return JSON.parse(todosJSON);
  } catch (error) {
    console.error('Error reading data from localStorage:', error);
    return [];
  }
}

function saveTodos(): void {
  try {
    localStorage.setItem('todos', JSON.stringify(todoList));
    console.log('Data saved successfully.');
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
}