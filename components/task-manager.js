class TaskManager extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.tasks = [];

    this.shadowRoot.innerHTML = `
      <style>
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          background: #f4f4f4;
          margin: 5px 0;
          padding: 10px;
          border: 1px solid #ccc;
        }
        button {
          margin-top: 10px;
        }
      </style>
      <div>
        <input type="text" id="taskInput" placeholder="New task">
        <button id="addTaskButton">Add Task</button>
        <ul id="taskList"></ul>
      </div>
    `;

    this.shadowRoot
      .querySelector("#addTaskButton")
      .addEventListener("click", () => this.addTask());
  }

  addTask() {
    const taskInput = this.shadowRoot.querySelector("#taskInput");
    if (taskInput.value.trim()) {
      this.tasks.push(taskInput.value.trim());
      this.renderTasks();
      taskInput.value = "";
    }
  }

  renderTasks() {
    const taskList = this.shadowRoot.querySelector("#taskList");
    taskList.innerHTML = this.tasks.map((task) => `<li>${task}</li>`).join("");
  }
}

customElements.define("task-manager", TaskManager);
