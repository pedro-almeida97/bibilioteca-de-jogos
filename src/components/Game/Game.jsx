import styles from './styles.module.css'

export default function Game({ title, cover, onRemove }) {
  return (
    <div className={styles.content}>
      <img src={cover} />
      <div>
        <h2>{title}</h2>
        <button onClick={onRemove}>Remover</button>
      </div>
    </div>
  )
}
