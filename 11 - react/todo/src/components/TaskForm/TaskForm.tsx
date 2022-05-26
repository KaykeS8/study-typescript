import React, { ChangeEvent, FormEvent, useState } from 'react'
import './taskForm.css'

import { ITask } from '../../interface/Task'

type Props = {
  btnText: string;
  taskList: ITask[];
  setTasklist?: React.Dispatch<React.SetStateAction<ITask[]>>
}

export const TaskForm = ({ btnText, taskList, setTasklist }: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value)
    } else {
      setDifficulty(Number(e.target.value))
    }
  }
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask = { id, title, difficulty }

    setTasklist!([...taskList, newTask])

    setTitle("")
    setDifficulty(0)

    console.log(taskList)
  }


  return (
    <form onSubmit={addTaskHandler} className='form'>
      <div className='input_container'>
        <label htmlFor="title">Titulo:</label>
        <input type="text" name='title' placeholder='Título da tarefa' onChange={handleChange} value={title} />
      </div>
      <div className='input_container'>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="number" name="difficulty" id="difficulty" placeholder='Dificuldade da tarefa' onChange={handleChange} value={difficulty} />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}