const addBtn = document.querySelector(".addButton");

function addFunc() {
  console.log("add");
  const li = document.createElement("li");
}

function init() {
  addBtn.addEventListener("click", addFunc);
}
