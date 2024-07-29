import { useGameStore } from "../../store/game/game.store"
import { StartedScreen } from "./StartedScreen"
import { GameBoard } from "./board/GameBoard"
import { Notification } from "../../components/ui/notification/Notification"
import { useEffect } from "react"

function App() {
 const { isGameStarted, isGameOver, resetGameOver } = useGameStore()

 useEffect(()=>{
  const timeout = setTimeout(() =>{
  resetGameOver()}, 3000)

  return () => {
    clearTimeout(timeout)
  }
 },[resetGameOver])

  return (
    <div>
      {isGameOver && 
       <Notification>
        Game over!
      </Notification>}
     
     {isGameStarted ? <GameBoard/> : <StartedScreen/>}
    </div>
  )
}

export default App
