"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskForm = void 0;
const react_1 = __importStar(require("react"));
require("./taskForm.css");
const TaskForm = ({ btnText, taskList, setTasklist, task, handleUpdate }) => {
    const [id, setId] = (0, react_1.useState)(0);
    const [title, setTitle] = (0, react_1.useState)("");
    const [difficulty, setDifficulty] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (task) {
            setId(task.id);
            setTitle(task.title);
            setDifficulty(task.difficulty);
        }
    }, [task]);
    const handleChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        }
        else {
            setDifficulty(Number(e.target.value));
        }
    };
    const addTaskHandler = (e) => {
        e.preventDefault();
        if (handleUpdate) {
            handleUpdate(id, title, difficulty);
        }
        else {
            const idRandom = Math.floor(Math.random() * 1000);
            setId(idRandom);
            const newTask = { id, title, difficulty };
            setTasklist([...taskList, newTask]);
            setTitle("");
            setDifficulty(0);
        }
    };
    return (<form onSubmit={addTaskHandler} className='form'>
      <div className='input_container'>
        <label htmlFor="title">Titulo:</label>
        <input type="text" id="title" name='title' placeholder='Título da tarefa' onChange={handleChange} value={title}/>
      </div>
      <div className='input_container'>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="number" name="difficulty" id="difficulty" placeholder='Dificuldade da tarefa' onChange={handleChange} value={difficulty}/>
      </div>
      <input type="submit" value={btnText}/>
    </form>);
};
exports.TaskForm = TaskForm;
