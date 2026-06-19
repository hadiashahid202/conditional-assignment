const input = document.getElementById("input-text");
const button = document.getElementById("add-btn");
const listManager = document.getElementById("list-items");

button.addEventListener("click", function () {
  if (input.value.trim() === "") {
    return;
  }
  const li = document.createElement("li");
  li.textContent = input.value;
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  delBtn.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(delBtn);
  listManager.appendChild(li);
  input.value = "";
});
