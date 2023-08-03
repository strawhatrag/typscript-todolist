const btn = document.getElementById('btn')! as HTMLInputElement;
const input = document.getElementById('todoInput')! as HTMLInputElement;   // type assertion

const form = document.querySelector('form')!; //non null assertion operator  "!"

// // "?" null or not
// btn?.addEventListener('click', () => {
//   alert(input.value)

// })

form.addEventListener('submit', handleSubmit);

//we use SubmitEvent as the type for the event
function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  console.log("Submitted!");
}

console.log(input)