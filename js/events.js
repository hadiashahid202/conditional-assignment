let count = 0;
const counting = document.getElementById("count");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");

addBtn.addEventListener("click", function () {
  count++;
  counting.textContent = count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  counting.textContent = count;
});
