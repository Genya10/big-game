import { useGameStore } from "../../store/game/game.store"
import { StartedScreen } from "./StartedScreen"
import { GameBoard } from "./board/GameBoard"

function App() {
 const {isGameStarted} = useGameStore()

  return (
    <div>
     {isGameStarted ? <GameBoard/> : <StartedScreen/>}
    </div>
  )
}

export default App
