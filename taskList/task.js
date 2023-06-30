//Function for query
const $ = (selector) => document.querySelector(selector);

const $date = $("#date"); //Current date (div)
const $list = $("#list"); // items tasks list (ul)
const $inputAddTask = $("#input-addTask");
const $btnAdd = $("#add");
const $check = "fa-check-circle";
const $uncheck = "fa-circle";
const $lineThrough = "line-through";
let id = 0;

//FUNCTION ADD TASK
function addingTask(task, id, realized, deleted) {
  if (eliminado) {
    return;
  }

  const REALIZED = realized ? $check : $uncheck;
  const LINE = realized ? $lineThrough : "";

  const element = `<li id="elemnt">
      <i class="far ${REALIZED}" data="done" id="${id}"></i>
      <p class="text-task ${LINE}">${task}</p>
      <i class="fas fa-trash de" data-="deleted" id="${id}"></i>
  </li>`;
  $list.insertAdjacentHTML("beforeend", element);
}

//Work Done-----
function taskDone(element) {
  element.classList.toggle($check);
  element.classList.toggle($uncheck);
  element.parentNode.querySelector(".text-task").classList.toggle($lineThrough);
}

//Work Deleted--------
function taskDeleted(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
}

$btnAdd.addEventListener("click", () => {
  const task = $inputAddTask.value;
  if (task) {
    addingTask(task, id, false, false);
  }
  $inputAddTask.value = "";
  id++;
});

document.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    const task = $inputAddTask.value;
    if (task) {
      addingTask(task, id, false, false);
    }
    $inputAddTask.value = "";
    id++;
  }
});

$list.addEventListener("click", function (event) {
  const element = event.target;
  const elementData = element.attributes.data.value;
  if (elementData === "realized") {
    taskDone(element);
  } else if (elementData === "deleted") {
    taskDeleted(element);
  }
});
