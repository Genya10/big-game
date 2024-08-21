import { Button } from "../../../components/ui/button/Button"
import { useGameStore } from "../../../store/game/game.store"

export function EndTurnButton(){
  const {endTurn, currentTurn} = useGameStore()

  const isOpponentTurn = currentTurn === 'opponent'

    return (
        <Button className="absolute -top-6 right-3 rounded-xl z-10" 
        
            variant={isOpponentTurn ? 'disabled' : 'primary'} 
            onClick={isOpponentTurn ? () => null : endTurn}
            disabled={isOpponentTurn}
        >  
        End Turn
        </Button>
    )
}