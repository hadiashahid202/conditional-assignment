const heading = document.getElementById("main-title");
heading.textContent = "Updating Elements";
const paragraph = document.querySelector(".intro");
paragraph.style.color = "blue";
const lists = document.querySelectorAll("li");
lists.forEach(function (list) {
  list.textContent += " ✓";
});
