import { useState } from 'react'
import Form from './components/Form/Form'
import Game from './components/Game/Game'

export default function App() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem('obc-game-lib')
    if (!storedGames) return []
    return JSON.parse(storedGames)
  })

  const addGames = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000)
    const game = { id, title, cover }
    setGames((state) => {
      const newState = [...state, game]
      localStorage.setItem('obc-game-lib', JSON.stringify(newState))
      return newState
    })
  }

  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id)
      localStorage.setItem('obc-game-lib', JSON.stringify(newState))
      return newState
    })
  }

  return (
    <div className="app">
      <header>
        <h1>Biblioteca de jogos </h1>
      </header>
      <main>
        <Form addGames={addGames} />
        <div className="games">
          {games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
