import { Button } from "../../../components/ui/button/Button"
import { useGameStore } from "../../../store/game/game.store"

export function EndTurnButton(){
  const {endTurn} = useGameStore()

    return (
        <Button className="absolute -top-6 right-3 rounded-xl z-10" 
                variant="primary" onClick={endTurn}>
          End Move
        </Button>
    )
}