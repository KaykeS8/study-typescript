import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './taskForm.css'

import { ITask } from '../../interface/Task'

type Props = {
  btnText: string;
  taskList: ITask[];
  setTasklist?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null
  handleUpdate?: (id: number, title: string, difficulty: number) => void
}


export const TaskForm = ({ btnText, taskList, setTasklist, task, handleUpdate }: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  useEffect(() => {

    if (task) {
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }

  }, [task])


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value)
    } else {
      setDifficulty(Number(e.target.value))
    }
  }

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleUpdate) {
      handleUpdate(id, title, difficulty)
    } else {
      const idRandom = Math.floor(Math.random() * 1000)
      setId(idRandom)
      const newTask: ITask = { id, title, difficulty }

      setTasklist!([...taskList, newTask])

      setTitle("")
      setDifficulty(0)
    }

  }


  return (
    <form onSubmit={addTaskHandler} className='form'>
      <div className='input_container'>
        <label htmlFor="title">Titulo:</label>
        <input type="text" id="title" name='title' placeholder='Título da tarefa' onChange={handleChange} value={title} />
      </div>
      <div className='input_container'>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="number" name="difficulty" id="difficulty" placeholder='Dificuldade da tarefa' onChange={handleChange} value={difficulty} />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}