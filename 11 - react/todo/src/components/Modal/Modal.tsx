import { ITask } from '../../interface/Task'
import './modal.css'

interface Props {
  children: React.ReactNode
}

export const Modal = ({ children }: Props) => {

  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal")
    modal?.classList.add("hide")
  }

  return (
    <div id="modal" className='hide'>
      <div className='fade' onClick={closeModal}></div>
      <div className='modal'>
        <h2>Edite sua tarefa</h2>
        {children}
      </div>
    </div>
  )
}