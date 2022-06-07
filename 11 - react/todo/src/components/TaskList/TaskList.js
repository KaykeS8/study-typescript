"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskList = void 0;
require("./taskList.css");
const TaskList = ({ taskList, handleDelete, handleEdit }) => {
    return (<>
      {taskList.length > 0 ? (taskList.map(task => (<div key={task.id} className="task">
            <div className='details'>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className='actions'>
              <i className='bi bi-pencil' onClick={() => handleEdit(task)}></i>
              <i className='bi bi-trash' onClick={() => handleDelete(task.id)}></i>
            </div>
          </div>))) : (<p>Nao possui tarefa cadastrada</p>)}
    </>);
};
exports.TaskList = TaskList;
