import { PlusCircle } from 'phosphor-react'
import styles from './TodoFrom.module.css'
import { ChangeEvent, FormEvent, useState } from 'react';

interface formProps {
  onCreateTask: (contentTask: string) => void;
}

export function TodoForm({ onCreateTask }: formProps) {
  const [contentTask, setContentTask] = useState('')

  function handleCreateTask(e: FormEvent) {
    e.preventDefault()
    onCreateTask(contentTask)
    setContentTask('')
  }

  function handleTaskContentChange(e: ChangeEvent<HTMLInputElement>) {
    setContentTask(e.target.value)
  }

  return(
    <div className={styles.content}>
      <form onSubmit={handleCreateTask} action="" className={styles.todoForm}>
        <input 
          onChange={handleTaskContentChange} 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={contentTask}
        />
        <button type='submit'>
          <p>Criar</p>
          <PlusCircle size={16} weight='bold'/>
        </button>
      </form>
    </div>
  )
}