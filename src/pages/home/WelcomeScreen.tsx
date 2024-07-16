import { Button } from "../../components/button/Button";
import { useGameStore } from "../../store/game/game.store";

export function WelcomeScreen() {
  const { startGame } = useGameStore();

  return (
    <div className="flex items-center justify-center flex-col gap-2 justify-center h-screen">
      <h1>Max Stone</h1>
      <br/>
      <Button variant="primary" isCircle onClick={startGame}>
        Start game
      </Button>
    </div>
  );
}
