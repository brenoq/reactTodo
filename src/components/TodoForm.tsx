import { PlusCircle } from 'phosphor-react'
import styles from './TodoFrom.module.css'

export function TodoForm() {
  return(
    <div className={styles.content}>
      <form action="" className={styles.todoForm}>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button type='submit'>
          <p>Criar</p>
          <PlusCircle size={16} weight='bold'/>
        </button>
      </form>
    </div>
  )
}