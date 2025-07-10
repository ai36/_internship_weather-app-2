import styles from './card1.module.css'

export const Card = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}