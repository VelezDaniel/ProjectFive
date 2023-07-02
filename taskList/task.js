//Function for query
const $ = (selector) => document.querySelector(selector);

const $date = $("#date"); //Current date (div)
const $list = $("#list"); // items tasks list (ul)
const $inputAddTask = $("#input-addTask");
const $btnAdd = $("#add");
const check = "fa-check-circle";
const uncheck = "fa-circle";
const lineThrough = "line-through";
let id;
let LIST; //Save task data

//CURRENT DATE
const DATE = new Date();
$date.innerHTML = DATE.toLocaleDateString("es-CO", {
  weekday: "long",
  month: "short",
  day: "numeric",
});

//FUNCTION ADD TASK
function addingTask(task, id, realized, deleted) {
  if (deleted) {
    return;
  }

  const REALIZED = realized ? check : uncheck;
  const LINE = realized ? lineThrough : "";

  const element = `<li id="element">
      <i class="far ${REALIZED}" data="realized" id="${id}"></i>
      <p class="text-task ${LINE}">${task}</p>
      <i class="fas fa-trash de" data="deleted" id="${id}"></i>
  </li>`;
  $list.insertAdjacentHTML("beforeend", element);
}

//Work Done-----
function taskDone(element) {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector(".text-task").classList.toggle(lineThrough);
  LIST[element.id].realized = LIST[element.id].realized ? false : true;
}

//Work Deleted--------
function taskDeleted(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].deleted = true;
}

$btnAdd.addEventListener("click", () => {
  const task = $inputAddTask.value;
  if (task) {
    addingTask(task, id, false, false);
    LIST.push({
      nam: task,
      id: id,
      realized: false,
      deleted: false,
    });
  }
  localStorage.setItem("TASK", JSON.stringify(LIST));
  $inputAddTask.value = "";
  id++;
});

document.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    const task = $inputAddTask.value;
    if (task) {
      addingTask(task, id, false, false);
      LIST.push({
        nam: task,
        id: id,
        realized: false,
        deleted: false,
      });
    }
    localStorage.setItem("TASK", JSON.stringify(LIST));
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
  localStorage.setItem("TASK", JSON.stringify(LIST));
});

//Local Storage get Item
let data = localStorage.getItem("TASK");
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  uploadList(LIST);
} else {
  LIST = [];
  id = 0;
}

function uploadList(DATA) {
  DATA.forEach(function (i) {
    addingTask(i.nam, i.id, i.realized, i.deleted);
  });
}
