const btn = document.getElementById('btn')! as HTMLInputElement;
const input = document.getElementById('todoInput')! as HTMLInputElement;   // type assertion
const form = document.querySelector('form')!; //non null assertion operator  "!"

const list = document.getElementById('todolist')

// // "?" null or not
// btn?.addEventListener('click', () => {
//   alert(input.value)

// })

form.addEventListener('submit', handleSubmit);

//we use SubmitEvent as the type for the event
function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  const newTodoText = input.value;
  const newList = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newList.append(newTodoText);
  newList.append(checkbox);
  list?.append(newList);
}

console.log(input)






