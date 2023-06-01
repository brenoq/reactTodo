import { Trash } from 'phosphor-react'
import styles from './Todo.module.css'

export function Todo() {
  return(
    <div className={styles.todo}>
      <input type="checkbox" />
      <p className={styles.completed}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <Trash size={24}/>
      </button>
    </div>
  )
}