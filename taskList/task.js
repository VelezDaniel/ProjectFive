//Function for query
const $ = (selector) => document.querySelector(selector);

const $date = $("#date");
const $list = $("#list");
const $inputAddTask = $("#input-addTask");
const $btnAdd = $("#add");

//FUNCTION ADD TASK
function addingTask(task) {
  const element = `<li id="elemnt">
  <i class="far fa-circle co" data="done" id="0"></i>
  <p class="text-task">${task}</p>
  <i class="fas fa-trash de" data-="deleted" id="0"></i>
</li>`;
  $list.insertAdjacentHTML("beforeend", element);
}

$btnAdd.addEventListener("click", () => {
  const task = $inputAddTask.value;
  if (task) {
    addingTask(task);
  }
  $inputAddTask.value = "";
});

document.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    const task = $inputAddTask.value;
    if (task) {
      addingTask(task);
    }
    $inputAddTask.value = "";
  }
});
