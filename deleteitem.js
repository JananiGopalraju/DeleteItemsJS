const collectionItems = document.getElementsByClassName("item");
const todoList = document.getElementById("todo-list");
const items = todoList.children;
const result = document.querySelector(".resultDabba b");
const button = document.getElementById("btn");

result.innerText = items.length;

button.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `Item: ${items.length + 1}`;

  newItem.addEventListener("click", deleteItem);

  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
});

function deleteItem(e) {
  e.target.remove();
  todoNr.innerText = items.length;
}

for (let item of items) {
  item.addEventListener("click", deleteItem);
}

todoList.addEventListener("click", function (e) {
  todoList.classList.toggle("fade");
  console.log("ul triggered")
});
