document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputField = document.getElementById("new-task-description");
    createNewTask(inputField.value);
    form.reset();
  });
  function createNewTask(task) {
    const ul = document.querySelector("#tasks");
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const editBtn = document.createElement("button");
    btn.addEventListener("click", () => {
      li.remove();
    });
    editBtn.addEventListener("click", () => {
      li.contentEditable = true;
      btn.contentEditable = false;
    });
    btn.innerText = " x ";
    editBtn.innerText = "edit";
    li.innerText = `${task}  `;
    li.appendChild(btn);
    li.appendChild(editBtn);
    ul.append(li);
  }
});
