import styles from './Header.module.css'
import todoLogo from '../assets/todo-logo.png'

export function Header() {
  return(
    <div className={styles.header}>
      <img src={todoLogo} alt="App Logo" />
    </div>
  )
}