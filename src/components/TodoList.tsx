import { Todo } from './Todo'

import styles from './TodoList.module.css'

import clipboard from '../assets/clipboard.svg'

export function TodoList() {
  return(
    <div className={styles.content}>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles.tasksCompleted}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>

      <main className={styles.main}>
        <Todo />
        <img src={clipboard} alt="imagem prancheta" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </main>
    </div>
  )
}