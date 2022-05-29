import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { useState } from "react";
import { ITask } from "./interface/Task";
import { Modal } from './components/Modal/Modal';
import './styles/global.css'
import './styles/app.css'

export const App = () => {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(item => {
        return item.id !== id
      })
    )
  }

  const hiderOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if (display) {
      modal?.classList.remove('hide')
    } else {
      modal?.classList.add('hide')
    }
  }

  const editTask = (task: ITask): void => {
    hiderOrShowModal(true);
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty }
    const updatedItems = taskList.map(task => {
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems)

    hiderOrShowModal(false)

  }

  return (
    <div>
      <Modal
        children={<TaskForm
          btnText="Editar tarefa"
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
        />}
      />
      <Header />
      <main className="main">
        <div>
          <h2>O que você vai fazer? </h2>
          <TaskForm btnText="Criar tarefa"
            taskList={taskList}
            setTasklist={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

