import { Todo } from './Todo'

import clipboard from '../assets/clipboard.svg'
import styles from './TodoList.module.css'
import { useState } from 'react';

export interface todoType {
  id: number;
  content: string;
  isCompleted: boolean;
}


export function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'Estudar TypeScript',
      isCompleted: true,
    },
    {
      id: 2,
      content: 'Tirar o sistema do ar',
      isCompleted: false,
    }
  ])

  function toggleComplete(taskId: number) {
    const newTodos = todos.map((todo) => {
      if (todo.id === taskId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }
  
  function deleteTask(taskId: number) {
    const newTodos = todos.filter((todo) => todo.id !== taskId);
    setTodos(newTodos);
  }

  function completedTasks() {
    return todos.filter((todo) => todo.isCompleted).length
  }

  return(
    <div className={styles.content}>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>
          <p>Tarefas criadas</p>
          <span>
            <p>{todos.length}</p>
          </span>
        </div>
        <div className={styles.tasksCompleted}>
          <p>Concluídas</p>
          <span>
            <p>{completedTasks() + ' de ' + todos.length}</p>
          </span>
        </div>
      </header>

      {(todos.length !== 0) ? (
        <main className={styles.main}>
          {todos.map((line) =>{
            return(
              <Todo 
                key={line.id}
                id={line.id}
                content={line.content}
                isCompleted={line.isCompleted}
                onToggleComplete={toggleComplete}
                onDeleteTask={deleteTask}
              />
            )
          })}
        </main>
      ) : (
        <main className={styles.main}>
          <img src={clipboard} alt="imagem prancheta" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </main>
      )}
    </div>
  )
}