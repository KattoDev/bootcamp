// ? JSON -> JavaScript Object Notation
// ? XML --- AJAX -> Asyncronous Javascript and XML

// ? JSONArray === [{}]
// ? JSONObject === {}

let todos = [
	{
		// ! SYNTAX {KEY: VALUE}
		task: "No apostarle a colombia",
		done: false,
	},
	{
		task: "Comprar las cervezas",
		done: true,
	},
];

const addbtn = document.getElementById("add-button");

const taskinput = document.querySelector("form input");

const container = document.querySelector(".task-container");

container.addEventListener("click", (evt) => {
	const elm = evt.target;

	if (elm.classList.contains("task")) {
		console.log("este es", elm.dataset.index);
	}
});

addbtn.addEventListener("click", (evt) => {
	const input = taskinput.value.trim();

	if (input !== "") {
		const newTask = { task: input, done: false };
		taskinput.value = "";
		todos.push(newTask);
		console.log(todos.length);
		// create the task template
		const taskTemplate = `
			<div class="task" data-index="${todos.length - 1}">
				<h3>${newTask.task}</h3>
				<div class="buttons-container">
					<input type="checkbox" name="task-done" id="task-done" />
					<button>Eliminar</button>
				</div>
			</div>
		`;

		// inject the HTML template
		container.insertAdjacentHTML("beforeend", taskTemplate);
	}
});
