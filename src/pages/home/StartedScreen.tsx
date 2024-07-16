import { Button } from "../../components/ui/button/Button"
import { useGameStore } from "../../store/game/game.store"
import { Heading } from "../../components/ui/heading/Heading";

export function StartedScreen() {
  const { startGame } = useGameStore();

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Heading>Max Stone</Heading>
      <br/>
      <Button variant="primary" isCircle onClick={startGame}>
        Start game
      </Button>
    </div>
  );
}
