import styles from './Pagination.module.scss'

import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg'

export const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <button className={styles.button}>
        <ArrowDownIcon />
      </button>

      <button className={`${styles.button} ${styles['button-active']}`}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>4</button>
      <button className={styles.button}>5</button>
      <button className={styles.button}>...</button>
      <button className={styles.button}>10</button>

      <button className={styles.button}>
        <ArrowDownIcon />
      </button>
    </div>
  )
}
