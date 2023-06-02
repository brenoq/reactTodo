import { Todo } from './Todo'
import {v4 as uuidv4} from 'uuid';

import clipboard from '../assets/clipboard.svg'
import styles from './TodoList.module.css'
import { useState } from 'react';
import { TodoForm } from './TodoForm';

export interface todoType {
  id: string;
  content: string;
  isCompleted: boolean;
}


export function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      content: 'Tarefa exemplo. Apague para começar!',
      isCompleted: true,
    },
  ])

  function toggleComplete(taskId: string) {
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
  
  function deleteTask(taskId: string) {
    const newTodos = todos.filter((todo) => todo.id !== taskId);
    setTodos(newTodos);
  }

  function createTask(contentTask: string) {
    setTodos([...todos, {
      id: uuidv4(),
      content: contentTask,
      isCompleted: false,
    }])
  }

  function completedTasks() {
    return todos.filter((todo) => todo.isCompleted).length
  }

  return(
    <div className={styles.content}>
      <div>
        <TodoForm onCreateTask={createTask}/>
      </div>

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