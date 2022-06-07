"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Header_1 = require("./components/Header/Header");
const Footer_1 = require("./components/Footer/Footer");
const TaskForm_1 = require("./components/TaskForm/TaskForm");
const TaskList_1 = require("./components/TaskList/TaskList");
const react_1 = require("react");
const Modal_1 = require("./components/Modal/Modal");
require("./styles/global.css");
require("./styles/app.css");
const App = () => {
    const [taskList, setTaskList] = (0, react_1.useState)([]);
    const [taskToUpdate, setTaskToUpdate] = (0, react_1.useState)(null);
    const deleteTask = (id) => {
        setTaskList(taskList.filter(item => {
            return item.id !== id;
        }));
    };
    const hiderOrShowModal = (display) => {
        const modal = document.querySelector("#modal");
        if (display) {
            modal === null || modal === void 0 ? void 0 : modal.classList.remove('hide');
        }
        else {
            modal === null || modal === void 0 ? void 0 : modal.classList.add('hide');
        }
    };
    const editTask = (task) => {
        hiderOrShowModal(true);
        setTaskToUpdate(task);
    };
    const updateTask = (id, title, difficulty) => {
        const updatedTask = { id, title, difficulty };
        const updatedItems = taskList.map(task => {
            return task.id === updatedTask.id ? updatedTask : task;
        });
        setTaskList(updatedItems);
        hiderOrShowModal(false);
    };
    return (<div>
      <Modal_1.Modal children={<TaskForm_1.TaskForm btnText="Editar tarefa" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/>}/>
      <Header_1.Header />
      <main className="main">
        <div>
          <h2>O que você vai fazer? </h2>
          <TaskForm_1.TaskForm btnText="Criar tarefa" taskList={taskList} setTasklist={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList_1.TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
        </div>
      </main>
      <Footer_1.Footer />
    </div>);
};
exports.App = App;
