import { Trash } from 'phosphor-react'
import styles from './Todo.module.css'

interface todoProps {
  id: string;
  content: string;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Todo({ id, content, isCompleted, onToggleComplete, onDeleteTask }: todoProps ) {
  function handleTogleComplete() {
    onToggleComplete(id)
  }

 function handleDeleteComment() {
  onDeleteTask(id)
 }

  return(
    <div className={styles.todo}>
      <input onChange={handleTogleComplete} type="checkbox" defaultChecked={isCompleted}/>
      <p className={isCompleted ? styles.completed : styles.uncompleted}>{content}</p>
      <button>
        <Trash onClick={handleDeleteComment} className={styles.deleteImg} size={26}/>
      </button>
    </div>
  )
}