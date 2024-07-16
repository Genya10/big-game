import { useGameStore } from "../../store/game/game.store"
import { WelcomeScreen } from "./WelcomeScreen"
import { GameBoard } from "./board/GameBoard"

function App() {
 const {isGameStarted} = useGameStore()

  return (
    <div>
     {isGameStarted ? <GameBoard/> : <WelcomeScreen/>}
    </div>
  )
}

export default App
