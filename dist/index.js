"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput"); // type assertion
const form = document.querySelector("form"); //non null assertion operator  "!"
// // "?" null or not
// btn?.addEventListener('click', () => {
//   alert(input.value)
// })
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault(); // Prevents the default form submission behavior
  console.log("Submitted!");
}
console.log(input);
