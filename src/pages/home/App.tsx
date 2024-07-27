import { useGameStore } from "../../store/game/game.store"
import { StartedScreen } from "./StartedScreen"
import { GameBoard } from "./board/GameBoard"
import { Notification } from "../../components/ui/notification/Notification"

function App() {
 const { isGameStarted } = useGameStore()

  return (
    <div>
      <Notification>
        Game over!
      </Notification>
     {isGameStarted ? <GameBoard/> : <StartedScreen/>}
    </div>
  )
}

export default App
