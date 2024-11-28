// ? JSON -> JavaScript Object Notation
// ? XML --- AJAX -> Asyncronous Javascript and XML

// ? JSONArray === [{}]
// ? JSONObject === {}

let todos = [];

/**
 * ? ---------------------------------------------------------------------------------------------------
 * ? --------------------------------------------- getters ---------------------------------------------
 * ? ---------------------------------------------------------------------------------------------------
 */
const addbtn = document.getElementById("add-button");
const taskinput = document.querySelector("form input");
const container = document.querySelector(".task-container");

/**
 * ? ----------------------------------------------------------------------------------------------------
 * ? ---------------------------------------------- events ----------------------------------------------
 * ? ----------------------------------------------------------------------------------------------------
 */

// ? reload window event
document.addEventListener("DOMContentLoaded", () => {
	// ? get the tasks on the local storage
	const localTodos = JSON.parse(localStorage.getItem("tasks"));

	if (localTodos) {
		localTodos.forEach((element) => {
			todos.push(element);
			AddTaskCard(element);
		});
	}
});

document.addEventListener("onchange", (evt) => {
	console.log("a");
});

// ? evento de click en el container [delegación de eventos]
container.addEventListener("click", (evt) => {
	const elm = evt.target;

	// ? Si es el checkbox
	if (elm.type == "checkbox") {
		const root = elm.parentElement.parentElement;
		console.log(elm.type);

		root.querySelector(".task-text").classList.toggle("done");

		let taskObj = todos[root.dataset.index];
		todos[root.dataset.index].done = !taskObj.done;

		SaveData();
	}
	// ? si es el boton de eliminar
	else if (elm.type == "submit") {
		console.log(elm.type);

		const root = elm.parentElement.parentElement;

		todos.splice(root.dataset.id, 1);
		root.remove();
		SaveData();
	}
});

addbtn.addEventListener("click", (evt) => {
	const input = taskinput.value.trim();

	if (input !== "") {
		const newTask = { task: input, done: false };

		taskinput.value = "";

		todos.push(newTask);
		AddTaskCard(newTask);
		SaveData();
	}
});

/**
 * ? ----------------------------------------------------------------------------------------------------
 * ? ----------------------------------------------- misc -----------------------------------------------
 * ? ----------------------------------------------------------------------------------------------------
 */

/**
 * Adds a task card with a object
 * @param {object} newTaskObject the task object to add
 */
function AddTaskCard(newTaskObject) {
	const taskTemplate = `
			<div class="task" data-index="${todos.length - 1}">
				<h3 class="task-text ${newTaskObject.done ? "done" : ""}">${
		newTaskObject.task
	}</h3>
				<div class="buttons-container">
					<input type="checkbox" name="task-done" id="task-done" ${
						newTaskObject.done ? "checked" : ""
					}/>
					<button>Eliminar</button>
				</div>
			</div>
		`;

	// inject the HTML template
	container.insertAdjacentHTML("beforeend", taskTemplate);
}

/**
 * Save the todos in localstorage aaaaaaa
 */
function SaveData() {
	const taskText = JSON.stringify(todos);

	localStorage.setItem("tasks", taskText);
}
