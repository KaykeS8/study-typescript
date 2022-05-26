import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer";
import './styles/global.css'
import './styles/app.css'
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { useState } from "react";
import { ITask } from "./interface/Task";

export const App = () => {

  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <div>
      <Header />
      <main className="main">
        <div>
          <h2>O que você vai fazer? </h2>
          <TaskForm btnText="Criar tarefa" taskList={taskList} setTasklist={setTaskList} />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList taskList={taskList}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

