import styles from './styles.module.css'
import { useState } from 'react'

export default function Form({ addGames }) {
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')
  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGames({ title, cover })
    setTitle('')
    setCover('')
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.content}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input
            type="text"
            name="cover"
            id="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <div>
          <button type="submit ">Adicionar à biblioteca</button>
        </div>
      </div>
    </form>
  )
}
