import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}

export default App
