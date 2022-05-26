import { ITask } from '../../interface/Task';
import './taskList.css'


type Props = {
  taskList: ITask[]
}

export const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map(item => (
          <div key={item.id} className="task">
              <div className='details'>
                <h4>{item.title}</h4>
                <p>Dificuldade: {item.difficulty}</p>
              </div>
              <div className='actions'>
                <i className='bi bi-pencil'></i>
                <i className='bi bi-trash'></i>
              </div>
          </div>
        ))
      ) : (
        <p>Nao possui tarefa cadastrada</p>
      )
      }
    </>
  )
}